import SocketApi from './SocketApi'
import constants from './constants'

export default class VideoMessenger extends SocketApi {
  constructor() {
    super();
    this.io.socket.get(constants.VIDEO_SUBSCRIBE_ENDPOINT)
  }

  setVideoStreamListener(fn, ctx) {
    this.io.socket.on(constants.VIDEO_EVENT, fn.bind(ctx))
  }

  setAudioStreamListener(fn, ctx) {
    this.io.socket.on(constants.AUDIO_EVENT, fn.bind(ctx))
  }
}
