from flask import Flask, request
import neattext.functions as nfx
import keras
import tensorflow as tf
from keras_preprocessing.sequence import pad_sequences
from tqdm import tqdm
import pickle
import warnings
from flask_cors import CORS
warnings.filterwarnings('ignore')

app = Flask(__name__)

CORS(app)

with open('token.pkl', 'rb') as file:
    tokenizer = pickle.load(file)
model = keras.models.load_model('model.h5')



def clean_text(text):
    text_length=[]
    cleaned_text=[]
    for sent in tqdm(text):
        sent=sent.lower()
        sent=nfx.remove_special_characters(sent)
        sent=nfx.remove_stopwords(sent)
        text_length.append(len(sent.split()))
        cleaned_text.append(sent)
    return cleaned_text,text_length

@app.route("/")
def hello_world():
    return "Server Active"

@app.route("/predict", methods=[ 'POST'])
def predict():

    request_data = request.get_json()
    text = [request_data['text']]

    cleaned_text,_=clean_text(text)
    text_seq=tokenizer.texts_to_sequences(cleaned_text)
    text_pad=pad_sequences(text_seq,maxlen=50)
    
    pred = model.predict(text_pad)[0][0]
    
    return '{ "prediction": "' + str(pred) + '" }'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)