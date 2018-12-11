/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  sub: function(req, res) {
        if(! req.isSocket())
        {
          return res.badRequest();
        }

        sails.sockets.join(req, "coolest room", function(){
          console.log("Someone has entered the coolest room.")
        })

        return res.ok()
      }
};
