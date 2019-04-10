import { connect } from 'twilio-video';
export default function(){

  return fetch('video/token').then(x => x.text()).then(function(token){
    connect(token, { name:'my-new-room' }).then(room => {
      console.log(`Successfully joined a Room: ${room}`);
      room.on('participantConnected', participant => {
        console.log(`A remote Participant connected: ${participant}`);
      });
    }, error => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
  })

}
