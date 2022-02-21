const axios = require("axios");
const authService = require("./auth-service");

const deviantartUrlBase = "https://www.deviantart.com/api/v1/oauth2";

async function getMessages() {
    const params = `access_token=${authService.getAccessToken()}`;

    try {
        const response = await axios.post(`${deviantartUrlBase}/messages/feed`, params);

        console.log("getting messages...", response);

        return response?.data;
    } catch (error) {
        console.log('error getting messages...', error);

        throw error;
    }
    
}

module.exports = {
    getMessages
  };

