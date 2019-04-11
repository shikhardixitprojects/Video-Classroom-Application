
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const videoGrant = new VideoGrant();

let counter=0;

module.exports = {


    token:function(req, res){
    let token;
    if(process.env.NODE_ENV === "production"){
      token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET

      );
    } else{
      token = new AccessToken(
        sails.config.twilioAccountSid,
        sails.config.twilioApiKey,
        sails.config.twilioApiSecret
      );
    }

    token.addGrant(videoGrant);
    token.identity = "user" + (counter++);
    return res.send(token.toJwt());

    },
};
