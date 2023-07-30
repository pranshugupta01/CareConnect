function is_char(x) {
    return x.length == 1;
  }
  
  function waitElement(elementId) {
    return new Promise((resolve, reject) => {
      const element = document.getElementById(elementId);
      if (element) {
        resolve(element);
      } else {
        let tries = 20;
        const interval = setInterval(() => {
          const element = document.getElementById(elementId);
          if (element) {
            clearInterval(interval);
            resolve(element);
          }
          if (tries-- < 0) {
            clearInterval(interval);
            reject(new Error("Element not found"));
          }
        }, 100);
      }
    });
  }
  
  let typed_sentence = ''
  
  function add_msg(msg, cls) {
    const msg_ele = document.createElement('div');
    msg_ele.className = cls;
    msg_ele.innerText = msg;
    document.getElementsByClassName('chatbot-messages')[0].appendChild(msg_ele);
  }
  
  async function send_to_api(x){
      const data={
          "text": x
      }
      try {
          const response = await fetch("http://localhost:8899/chat-response", {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log(result);
          return result.data;
      } catch (error) {
          console.log(error);
          return;
      }
  }
  
  
  
  async function process(x) {
  
    const response = await fetch("http://localhost:6050/predict", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{
      "text": "${x}"
      }`,
    });
    const pred = parseFloat((await response.json()).prediction);
  
    if (pred < 0.5) {
      return;
    }
  
    const popup = document.createElement('div'); 
  
    popup.innerHTML = `
    <div id="suicide_prevention_popup">
    <div class="chatbot-window">
    <div class="chatbot-header">
      <h2>CareConnect</h2>
      <button class="close-button">x</button>
    </div>
    <div class="chatbot-body">
      <div class="chatbot-messages">
  
      </div>
      <form class="chatbot-input-form">
        <input type="text" placeholder="Type your message...">
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  
    </div>
    `  
  
    document.body.appendChild(popup);
    waitElement('popup');
  
    if (pred > 0.8) {
      add_msg('You seem to be in distress. Please contact the following helpline numbers:\n8296706107\nYou can chat with me! How are you feeling?', 'message-received');
    }
    else {
      add_msg('You can chat with me if you are distressed! How are you?', 'message-received');
    }
  
    const cb = document.getElementsByClassName('close-button')[0];
    cb.addEventListener('click', () => {
      popup.remove();
    });
  
    const form = document.getElementsByClassName('chatbot-input-form')[0];
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const input = document.getElementsByClassName('chatbot-input-form')[0].getElementsByTagName('input')[0];
      const msg = input.value;
      input.value = '';
      add_msg(msg, 'message-sent');
      const reply = await send_to_api(msg);
      add_msg(reply, 'message-received');
    });
  }
  
  document.addEventListener('keyup', (event) => {
    const typed_char = event.key;
    if (!is_char(typed_char)) {
      return; 
    }
    typed_sentence += typed_char;
  
    if (typed_char == '.') {
      process(typed_sentence);
      typed_sentence = '';
    }
  });