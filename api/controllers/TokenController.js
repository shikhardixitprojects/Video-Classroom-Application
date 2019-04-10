
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const videoGrant = new VideoGrant();

let counter=0;

module.exports = {


  token:function(req, res){


  const token = new AccessToken(
    if(process.env.NOD_ENV === "production"){
      process.env.TWLIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET
    }
    else{
      sails.config.twilioAccountSid,
      sails.config.twilioApiKey,
      sails.config.twilioApiSecret
    }
  );
  token.addGrant(videoGrant);
  token.identity = "user" + (counter++);
  return res.send(token.toJwt());

  },


};
