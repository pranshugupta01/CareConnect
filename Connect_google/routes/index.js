const express = require("express");
const router = express.Router();
const sentimentController = require('../contollers/sentiment_analyser');
const chatBotResponse = require('../contollers/chatbot_parser');

router.get('/',(req,res)=>{
    return res.send("Hello");
});

router.post('/sentiment-analyse',sentimentController.sentimentAnalyser);
router.post('/chat-response',chatBotResponse.chatResponse);

module.exports = router;