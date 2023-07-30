const language = require('@google-cloud/language');

async function analyse(text) {
    const client = new language.LanguageServiceClient();
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
    return sentiment;
}

exports.sentimentAnalyser = async (req,res)=>{
    const text = req.body.text;
    const result = await analyse(text);

    if(result.score < 0){
        return res.status(200).json({
            message:"Negative",
            result:result.score
        })
    }
    else if(result.score == 0){
        return res.status(200).json({
            message:"Neutral",
            result:result.score
        })
    }
    else{
        return res.status(200).json({
            message:"Positive",
            result:result.score
        })
    }
}