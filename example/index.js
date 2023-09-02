const Api = require('dz-api');

const api = new Api();
api.apiUrl = 'https://khalildjaariri.ftp.sh/api'
api.token = '2e01314d5189ee15bb72ab0267e77e4357e86aa831a3b3b5c96133575a7ccd1b'
api.secret = 'dfb0c611bf7cc21e2deaa9013db7c60db8618e7b51152742bb4f45e71456204f'



api.checkToken()
  .then(data => {
    if (data.error) {
      console.log("Error Token Or Secret");
    } else {
      console.log("Token is valid");
    }
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });