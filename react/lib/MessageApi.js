// import socket from 'socket.io-client';

export default class MessageApi {

    constructor() {
        io.socket.get("/message/sub");
    }

    async get() {
        const response = await fetch("/message")
        const json = await response.json()
        return json;
    }

    async send(name, message) {
        const response = await fetch("/message", {
            method:"POST",
            body: JSON.stringify({ name, message })
        })

        const json = await response.json();

        return json;
    }

    listen(cb) {
        window.io.socket.on("message", cb)
    }

    

}
