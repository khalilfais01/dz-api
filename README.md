# Requirements

To use this project, you'll need the following:

1. **Node.js**: You should have Node.js version 12 or higher installed. You can download it from the [official Node.js website](https://nodejs.org/).
   ```sh
   node -v
2. **NPM (Node Package Manager)**: NPM is included with Node.js. Ensure you have NPM installed by running the following command in your terminal:

   ```sh
   npm -v
3. **API (Token, Secret)**: You can get Token And Secret for free 

4. **Install Package**: 
   npm (***Recomended***) OR yarn
   ```sh
   # NPM
   npm install dz-api
   # YARN
   yarn add dz-api
# Quick start

```js
   //// FOR CHECK IF TOKEN AND SECRET ITS WORKING
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
