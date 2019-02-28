import sailsIOClient from 'sails.io.js'
import socketIOClient from 'socket.io-client'


const io = sailsIOClient(socketIOClient)

export default class SocketApi {

  constructor(){
    this.io = io
  }

}
