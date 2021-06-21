var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if (Content == "take my selfie"){
    console.log("taking selfie");
    speak();
}

}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 4 sec";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
     Webcam.attach(camera);
     setTimeout(function()
     { take_snapshot(); 
        save(); }, 4000); }
camera = document.getElementById("camera");
Webcam.set({
    width:400,
    hight:300,
    img_format:'png',
    png_quality:100,
});
function take_snapshot () {
    Webcam.snap(function  (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img1" src="'+data_uri+'"/>'
    })
}
function save() {
    link = document.getElementById("link");
    img = document.getElementById("img1").src;
    link.href = img;
    link.click();
}