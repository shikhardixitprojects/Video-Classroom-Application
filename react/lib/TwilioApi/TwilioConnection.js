import { connect } from 'twilio-video';

export const getToken = () => fetch('/video/token').then(x => x.text())

export const connectTwilio = (token, roomName) => connect(token, { name:roomName })

// export default roomName => getToken().then(token => connectTwilio(token, roomName))

export default class TwilioConnection {

  constructor() {
    this.ready = false
    this.backlog = []
    console.log('created?')
    getToken().then( token => {
      this.ready = true
      this.token = token
      console.log(token)
    }).then(this.onReady.bind(this))
  }

  onReady() {
    for( const callback of this.backlog ) {
      callback()
    }
  }

  async connect(config) {
    if(!this.ready) {
      return await new Promise( s => {
        this.backlog.push( () => {
          s(this.connect(config))
        })
      })
    }
    console.log("connecting?")
    try {
      return await connect(this.token, config).then(room => {
        console.log(`Successfully joined a Room: ${room}`, config);
        room.on('participantConnected', participant => {
          console.log(`A remote Participant connected: ${participant}`);
        });
        
        return room
      })
    } catch (e) {
      console.log( "Error when connecting to the room: " + e.message)
    }
  }
}
