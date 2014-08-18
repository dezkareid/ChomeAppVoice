var recognition ;
function saluda () {
  var msg = new SpeechSynthesisUtterance();
  msg.text = 'welcome to gdg monterrey';

  console.log("Debo hablar");
  window.speechSynthesis.speak(msg);
}

function escucha () {
  recognition = new webkitSpeechRecognition();
  //recognition.continuous = true;
  recognition.onresult = function (event) {

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
          
      
          
          saluda();

        
         console.log(event.results[i][0].transcript.trim());
      }
    }
  }

  recognition.onend = function() { console.log("Termine"); };
  recognition.start();

}



window.onload += saluda();