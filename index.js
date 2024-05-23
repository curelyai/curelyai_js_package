// index.js

const axios = require('axios');

class CurelyAIChat {
    constructor(botKey) {
        this.botKey = botKey;
        this.baseUrl = 'http://localhost:8000';  // API base URL
    }

    async chat(message) {
        const url = `${this.baseUrl}/chat`;
        const headers = {
            'Content-Type': 'application/json',
            'bot_key': this.botKey
        };
        const payload = {
            message: message
        };

        try {
            const response = await axios.post(url, payload, { headers });
            return response.data.message;
        } catch (error) {
            throw new Error(`API call failed with status code ${error.response.status}: ${error.response.data}`);
        }
    }
}

module.exports = CurelyAIChat;

// Usage example (comment this out before publishing)
// (async () => {
//   const chatClient = new CurelyAIChat('your_bot_key');
//   const response = await chatClient.chat('Hello, how are you?');
//   console.log(response);
// })();
