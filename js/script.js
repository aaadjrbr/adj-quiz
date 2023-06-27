//--------------pop-up stuff starts here:---------------------
window.addEventListener('load', function() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  
  overlay.style.display = 'block';
  popup.style.display = 'block';

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });
});

function closePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  
  overlay.style.display = 'none';
  popup.style.display = 'none';
}
//-----------------end of pop-up stuff!!-------------------------

//----------button stuff 'submit'------------------------
function checkAnswer1() {
  var answer = document.getElementById("answer1").value;
  var result = document.getElementById("result1");

  if (answer.toLowerCase() === "pizza" || answer.toLowerCase() === "Pizza") {
    result.innerHTML = "Correct!";
    playAudio("correctAudio");
  } else {
    result.innerHTML = "Incorrect. Try again.";
    playAudio("incorrectAudio");
  }
}
function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

function checkAnswer2() {
  var answer = document.getElementById("answer2").value;
  if (answer.toLowerCase() === "Blue" || answer.toLowerCase() === "blue") {
    document.getElementById("result2").innerHTML = "Correct!";
    playAudio("correctAudio");
  } else {
    document.getElementById("result2").innerHTML = "Really?! Not even close. (Incorrect)";
    playAudio("incorrectAudio");
  }
  
}
function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

function checkAnswer3() {
  var answer = document.getElementById("answer3").value;
  if (answer.toLowerCase() === "malhação 2010" || answer.toLowerCase() === "Malhação 2010" || answer.toLowerCase() === "Malhacao 2010" || answer.toLowerCase() === "malhacao 2010") {
    document.getElementById("result3").innerHTML = "You are freaking good! Dang!";
    playAudio("correctAudio");
  } else {
    document.getElementById("result3").innerHTML = "You could never guess this one haha. Try again.";
    playAudio("incorrectAudio");
  }
}
function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

function checkAnswer4() {
  var answer = document.getElementById("answer4").value;
  if (answer.toLowerCase() === "lasagna" || answer.toLowerCase() === "Lasagna") {
    document.getElementById("result4").innerHTML = "Well done!";
    playAudio("correctAudio");
  } else {
    document.getElementById("result4").innerHTML = "Incorrect. Try again.";
    playAudio("incorrectAudio");
  }
}
function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}
//-----------------------the end of button stuf---------------------------------

//------------------button pressing 'enter' (trigging button)-------------
function handleKeyPress(event, functionName) {
  if (event.key === "Enter") {
    event.preventDefault();
    window[functionName](); // Call the corresponding function dynamically using the function name
  }
}
//-----------end of pressing 'enter' button (trigging button)--------------


