
/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const VIDEO_ROOM_NAME = "the lamest stream room"
const SCREEN_EVENT = "screenevent"
const VIDEO_EVENT = "videoevent"
const AUDIO_EVENT = "audioevent"

module.exports = {


  sub:function(req, res){
    if(! req.isSocket){
      return res.badRequest();
    }

    sails.sockets.join(req.socket, VIDEO_ROOM_NAME, () => console.log('found a lame boi'));
    return res.ok();
  },

  emitting:function(req, res){
    if(! req.isSocket){
      return res.badRequest();
    }

    sails.sockets.broadcast(VIDEO_ROOM_NAME, VIDEO_EVENT, req.body.video)
    return res.ok();
  },

  screenrecording:function(req, res){
    if(! req.isSocket){
      return res.badRequest();
    }

    sails.sockets.broadcast(VIDEO_ROOM_NAME, SCREEN_EVENT, req.body.video)
    return res.ok();
  },

  emitAudio: function(req,res) {
    if(!req.isSocket) return res.badRequest();
    sails.sockets.broadcast(VIDEO_ROOM_NAME, AUDIO_EVENT, req.body.audio)
    return res.ok()
  }

};
