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

const isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
let canClick = false;
function showPattern() {
  canClick = false;
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      playSound(gamePattern[i]);
      $("#" + gamePattern[i])
        .fadeOut(100)
        .fadeIn(100);

      if (i == gamePattern.length - 1) {
        canClick = true;
      }
    }, i * 500);
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
    // if (
    //   navigator.userAgent.match(/Android/i) ||
    //   navigator.userAgent.match(/webOS/i) ||
    //   navigator.userAgent.match(/iPhone/i) ||
    //   navigator.userAgent.match(/iPod/i) ||
    //   navigator.userAgent.match(/BlackBerry/i) ||
    //   navigator.userAgent.match(/Windows Phone/i)
    // )
    if (isTouchScreen) {
      $("#level-title").text("Game Over, Press restart button to restart!");
      $(".mobile-btn").text("Restart");
      $(".mobile-btn").removeClass("hidden");
    } else {
      $("#level-title").text("Game Over, Press any Key to restart!");
    }
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

// if (
//   navigator.userAgent.match(/Android/i) ||
//   navigator.userAgent.match(/webOS/i) ||
//   navigator.userAgent.match(/iPhone/i) ||
//   navigator.userAgent.match(/iPod/i) ||
//   navigator.userAgent.match(/BlackBerry/i) ||
//   navigator.userAgent.match(/Windows Phone/i)
// )
if (isTouchScreen) {
  $("#level-title").text("Click on Start.");
  $(".mobile-btn").removeClass("hidden");
  $(".mobile-btn").on("click", function () {
    if (!keyPressedOnce) {
      keyPressedOnce = true;
      $(".mobile-btn").addClass("hidden");
      $("#level-title").text("Ready...");
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  });
}
