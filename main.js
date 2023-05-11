//Here is the teachable machine link :- https://teachablemachine.withgoogle.com/models/KfOpagDDD/;

Webcam.set({
    width:400,
    height:350,
    image_format : 'png',
    png_quality:144
});
  camera = document.getElementById("camera");

  Webcam.attach('#camera');

  function take_snapshot()
  {
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src= "'+ data_uri+'"/>';
     });
  }
  console.log('ml5 version:',ml5.version);
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KfOpagDDD/model.json",modelLoaded);

  function modelLoaded() {
   console.log('Model Loaded!')
  }

  function speak(){
   var synth = window.speechSynthesis;
   speak_data = "The prediction is"+ perdication;
   var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }