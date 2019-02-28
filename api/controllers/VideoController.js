/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const VIDEO_ROOM_NAME = "the lamest stream room"
let count = 0
module.exports = {


  sub:function(req, res){
    if(! req.isSocket){
      return res.badRequest();
    }

    sails.sockets.join(req.socket, VIDEO_ROOM_NAME, () => console.log('found a lame boi'));
    return res.ok();
  },

  emitting:function(req, res){
    console.log("POST", ++count)
    if(! req.isSocket){
      return res.badRequest();
    }

    sails.sockets.broadcast(VIDEO_ROOM_NAME, "message", req.body.video)
    return res.ok();
  }

};
