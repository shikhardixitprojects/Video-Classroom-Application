function connect(){
  io.socket.get("/sub");
}

var vid = document.getElementById("play")

window.onload = function() {
  connect();
  io.socket.on('message',function(image){
    vid.src = image
    console.log('updated', image.length)
  });
}
