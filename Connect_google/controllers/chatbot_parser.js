
const dialogflow = require('@google-cloud/dialogflow');

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient();

async function detectIntent(
    projectId,
    sessionId,
    query,
    contexts,
    languageCode
) {
  // The path to identify the agent that owns the created intent.
    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
        text: {
            text: query,
            languageCode: languageCode,
        },
        },
    };

    if (contexts && contexts.length > 0) {
        request.queryParams = {
        contexts: contexts,
        };
    }

    const responses = await sessionClient.detectIntent(request);
    return responses[0];
    }

async function executeQueries(projectId, sessionId, queries, languageCode) {
// Keeping the context across queries let's us simulate an ongoing conversation with the bot
    let context;
    let intentResponse;
    let results=[];
    for (const query of queries) {
        try {
            intentResponse = await detectIntent(
                projectId,
                sessionId,
                query,
                context,
                languageCode
            );
            results.push(intentResponse.queryResult.fulfillmentText)
            // Use the context from this response for next queries
            context = intentResponse.queryResult.outputContexts;
        } catch (error) {
            console.log(error);
        }
    }
    return results;
}

exports.chatResponse = async (req,res)=>{
    const query = [];
    query.push(req.body.text);
    const result = await executeQueries('lyrical-catfish-377511', '2345678', query, 'en');
    if(result.length>0){
        return res.status(200).json({
            "message":"Successfull request",
            "data":result[0]
        });
    }
    else{
        return res.status(500).json({
            "message":"Error in request",
        })
    }
}