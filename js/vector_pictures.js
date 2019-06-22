"use strict";

let baby1 = document.getElementById("baby1");

baby1.addEventListener("click", function() {
  let audio = document.createElement("audio");
  audio.src = "./audio/hello-1.wav";
  audio.autoplay = true;

  let mouth = document.getElementById("mouth1");
  setTimeout(function() {
    mouth.classList.remove("baby_mouth");
    mouth.classList.add("baby_mouth__speak");
  }, 200);
  setTimeout(function() {
    mouth.classList.remove("baby_mouth__speak");
    mouth.classList.add("baby_mouth");
  }, 400);

});
