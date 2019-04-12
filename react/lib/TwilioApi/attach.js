const attach = (twilioConnection, videoElement, roomName) => {
  twilioConnection.connect({ name:roomName }).then( room => {

    let instructor;
    for( const [key, value] of room.participants ) {
      if(value.tracks.size > 0) {
        instructor = value
      }
    }
    if(instructor) {
      instructor.on("trackStarted", (track) => {
        track.attach(videoElement)
        console.log(track)
      })
    }
      room.on('participantConnected', participant => {
        if(instructor !== undefined){
          return;
        }
        if(participant.tracks.size > 0){
          instructor = participant
        }
        instructor.on("trackStarted", (track) => {
          track.attach(videoElement)
        })
      });
  })
}

export const attachWebcam = (twilioConnection, videoElement) => attach(twilioConnection, videoElement, "videostream")
export const attachDesktop = (twilioConnection, videoElement) => attach(twilioConnection, videoElement, "screenshare")
