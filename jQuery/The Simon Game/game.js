var gamePattern = [];
var userClickedPattern = [];
var level = 0;

var buttonColors = ["red", "blue", "green", "yellow"];

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

let canClick = false;
function showPattern() {
  canClick = false;
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      $("#" + gamePattern[i])
        .fadeOut("fast")
        .fadeIn("fast");
      playSound(gamePattern[i]);
      if (i == gamePattern.length - 1) {
        canClick = true;
      }
    }, i * 400);
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  //   $("#" + randomChoosenColor)
  //     .fadeOut("fast")
  //     .fadeIn("fast");
  //   playSound(randomChoosenColor);
  showPattern();
  level++;
  $("#level-title").text("Level " + level);
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  keyPressedOnce = false;
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("Success!");
  } else {
    console.log("Failure!");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press any Key to restart!");
    startOver();
  }

  if (
    currentLevel + 1 == level &&
    userClickedPattern[currentLevel] == gamePattern[currentLevel]
  ) {
    setTimeout(function () {
      nextSequence();
      userClickedPattern = [];
    }, 1000);
  }
}

$("div[type='button']").on("click", function () {
  if (!keyPressedOnce || !canClick) {
    return;
  }
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  $(this).fadeOut(100).fadeIn(100);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

let keyPressedOnce = false;
$(document).on("keydown", function (event) {
  if (!keyPressedOnce) {
    $("#level-title").text("Ready...");
    keyPressedOnce = true;
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
});

$(document).on("keydown", function (event) {
  if (!keyPressedOnce) {
    $("#level-title").text("Ready...");
    keyPressedOnce = true;
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
});

// For Help

function showHelpModal() {
  $("#help-modal").addClass("show");
}

// Hide the modal
function hideHelpModal() {
  $("#help-modal").removeClass("show");
}

// For example, using a button to show/hide the modal
$("#help-button").on("click", function () {
  let audio = new Audio("sounds/help.wav");
  audio.play();
  showHelpModal();
});

// Close button inside the modal
$("#close-button").on("click", function () {
  let audio = new Audio("sounds/close.wav");
  audio.play();
  hideHelpModal();
});


