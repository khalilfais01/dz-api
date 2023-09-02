const axios = require('axios');

class Api {
  constructor(apiUrl, token, secret) {
    this.apiUrl = apiUrl;
    this.token = token;
    this.secret = secret;
  }

  async checkToken(data) {
    try {
      const response = await axios.post(`${this.apiUrl}/createPayment`, data, {
        headers: {
          Token: this.token,
          Secret: this.secret,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  }
}

module.exports = Api;