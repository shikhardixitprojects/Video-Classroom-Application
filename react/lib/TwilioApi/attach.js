const attach = (twilioConnection, videoElement, roomName) => {
  twilioConnection.connect({ name:roomName }).then( room => {

    let instructor;
    for( const [key, value] of room.participants ) {
      if(value.tracks.size > 0) {
        instructor = value
      }
    }

    // BUG: right now instructor needs to be connected before all students
    // add a listener to the participantConnected event to account for this
    if(!instructor) throw new Error("No Instructor")

    instructor.on("trackStarted", (track) => {
      track.attach(videoElement)
      console.log(track)
    })
  })
}

export const attachWebcam = (twilioConnection, videoElement) => attach(twilioConnection, videoElement, "videostream")
export const attachDesktop = (twilioConnection, videoElement) => attach(twilioConnection, videoElement, "screenshare")

// import twilioConnect from './twilioConnection'
//
// export default function(videoElement) {
//
//   twilioConnect("videostream").then(room => {
//     console.log(`Successfully joined a Room: ${room}`);
//
//
//     room.on('participantConnected', participant => {
//
//       console.log(`A remote Participant connected: ${participant}`);
//       console.log(videoElement)
//
//       participant.tracks.forEach(publication => {
//
//         console.log(publication, publication.isSubscribed)
//
//         if (publication.isSubscribed) {
//           const track = publication.track;
//           track.attach(videoElement);
//       }
//       });
//
//     });
//
//
//
//   }, error => {
//     console.error(`Unable to connect to Room: ${error.message}`);
//   });
//
//   return {}
// }
