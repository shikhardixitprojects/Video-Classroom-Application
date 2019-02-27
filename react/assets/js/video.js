
var video = document.getElementById("video");
var canvas = document.getElementById("preview");
var context = canvas.getContext('2d');

context.width = canvas.width;
context.height = canvas.height;

 function connect(){
   io.socket.get("/sub");
 }

function logger(msg){
  $("#logger").text(msg);
  console.log(msg)
};

function loadCamera(stream){
  video.srcObject = stream;
  logger("Camera connected");
};


function loadFail(e){
  console.error(e, "ERROR")
};

 function viewVideo(video, context){
  context.drawImage(video,0,0,context.width,context.height);
  io.socket.post( "/emit", {video:canvas.toDataURL('image/webp')});
};


window.onload = function(){
        connect()

        navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia );

        if(navigator.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: { width: 480, height:360 }, audio: false}).then(loadCamera).catch(loadFail);
        }

        setInterval(function(){
            viewVideo(video,context);
        },5);
    };
