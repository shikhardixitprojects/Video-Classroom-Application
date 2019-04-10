
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const videoGrant = new VideoGrant({
  room: 'cool room',
});

let counter=0;

module.exports = {


  token:function(req, res){


  const token = new AccessToken(
    sails.config.twilioAccountSid,
    sails.config.twilioApiKey,
    sails.config.twilioApiSecret
  );
  token.addGrant(videoGrant);
  token.identity = "user" + (counter++);
  return res.send(token.toJwt());

  },


};
