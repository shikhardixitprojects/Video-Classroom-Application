import SocketApi from './SocketApi'
import constants from './constants'

export default class MessageApi extends SocketApi {

    constructor() {
        super();
        this.io.socket.get(constants.MESSAGE_SUBSCRIBE_ENDPOINT)
    }

    async get() {
        const response = await fetch(constants.MESSAGE_POST_ENDPOINT)
        const json = await response.json()
        return json;
    }

    async send(name, message) {
        const response = await fetch(constants.MESSAGE_POST_ENDPOINT, {
            method:"POST",
            body: JSON.stringify({ name, message })
        })

        const json = await response.json();

        return json;
    }

    listen(cb) {
        this.io.socket.on(constants.MESSAGE_EVENT, cb)
    }

}
