// var audioEnabled = false;
//   var synthesis = window.speechSynthesis;
//   var utterance;

//   function toggleAudioDescription() {
//     audioEnabled = !audioEnabled;
//     var btn = document.getElementById('toggle-audio-btn');
//     var icon = document.getElementById('audio-icon');
//     if (audioEnabled) {
//       icon.src = 'img/audio-on.png';
//       icon.alt = 'Áudio ativado';
//       document.body.addEventListener('mouseover', handleMouseOver);
//     } else {
//       icon.src = 'img/audio-off.png';
//       icon.alt = 'Áudio desativado';
//       document.body.removeEventListener('mouseover', handleMouseOver);
//       synthesis.cancel();  // Parar qualquer leitura em andamento
//     }
//   }

//   function handleMouseOver(event) {
//     if (!audioEnabled) return;
    
//     var target = event.target;
//     var text = target.getAttribute('aria-label') || target.innerText || target.alt || target.title;
    
//     if (text) {
//       utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = 'pt-BR';
//       synthesis.cancel();  // Parar qualquer leitura anterior
//       synthesis.speak(utterance);
//     }
//   }


var audioEnabled = false;
  var synthesis = window.speechSynthesis;
  var utterance;

  function toggleAudioDescription() {
    audioEnabled = !audioEnabled;
    var btn = document.getElementById('toggle-audio-btn');
    var icon = document.getElementById('audio-icon');
    if (audioEnabled) {
      icon.src = 'audio-on.png';
      icon.alt = 'Áudio ativado';
      document.body.addEventListener('click', handleInteraction);
      document.body.addEventListener('touchstart', handleInteraction);
    } else {
      icon.src = 'audio-off.png';
      icon.alt = 'Áudio desativado';
      document.body.removeEventListener('click', handleInteraction);
      document.body.removeEventListener('touchstart', handleInteraction);
      synthesis.cancel();  // Parar qualquer leitura em andamento
    }
  }

  function handleInteraction(event) {
    if (!audioEnabled) return;
    
    var target = event.target;
    var text = target.getAttribute('aria-label') || target.innerText || target.alt || target.title;
    
    if (text) {
      utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      synthesis.cancel();  // Parar qualquer leitura anterior
      synthesis.speak(utterance);
    }
  }