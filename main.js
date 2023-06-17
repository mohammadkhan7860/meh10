var SpeechRecognition = window.webkitSpeechRecongnition;

var recongition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongition.start();
}

recongition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
      if(Content =="take my selfie") 
      {
        console.log("taking selfie ---");
        speak();
      } 
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;
    speak_data = "Taking you Selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "selfie_image" src="' +data_uri+'">';
    });
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
    }, 5000);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}