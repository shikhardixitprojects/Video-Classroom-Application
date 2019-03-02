module.exports.routes = {

    'POST /video/stream': 'VideoController.screenrecording',
    'GET /video/sub': 'VideoController.sub',
    'POST /video/emitvideo': 'VideoController.emitting',
    'POST /video/audio': 'VideoController.emitAudio'

}
