const axios = require("axios");
const authService = require("./auth-service");

const deviantartUrlBase = "https://www.deviantart.com/api/v1/oauth2";

async function getMessages(dbCursor = null) {
    const params = `access_token=${authService.getAccessToken()}`;

    if (dbCursor) {
        params = params + `&cursor=${dbCursor}`;
    }

    try {
        const response = await axios.post(`${deviantartUrlBase}/messages/feed`, params);
        return response?.data;

    } catch (error) {
        console.log('error getting messages...', error);
        throw error;
    }
}

async function getMessagesProcessed() {
    let params = `access_token=${authService.getAccessToken()}`;

    let dbCursor = null;
    let currentMessages = [];

    let testBatches = 3;

    //Test with 3 rounds first so we don't overwhelm dA's api until we get a system down
    for (let i = 0; i < testBatches; i++) {
        try {
            await axios.post(`${deviantartUrlBase}/messages/feed?${params}`).then(response => {
                currentMessages.push(...response?.data?.results);
                dbCursor = response?.data?.cursor;
                if (dbCursor) {
                    params = `access_token=${authService.getAccessToken()}&cursor=${dbCursor}`;
                }

            });
            
            
    
        } catch (error) {
            console.log('error getting messages rounds...', error);
            throw error;
        }
    }

    return currentMessages;
    

    
}

module.exports = {
    getMessages,
    getMessagesProcessed
  };

