var img = document.getElementsByTagName('img')[0];
var direction = true;
var timer;

img.style.left = "0px";


function moveForward() {
  if (img.style.left >= (document.width - img.width) + "px")  {
    return;
  }
  img.style.left = (parseInt(img.style.left, 10) + 5) + "px";
}

function moveBackwards() {
  if (img.style.left <= (0 + "px"))  {
    return;
  }
  img.style.left = (parseInt(img.style.left, 10) - 5) + "px";
}

function moveFaster() {
  if (img.style.left >= (document.width - img.width) + "px")  {
    return;
  }
  img.style.left = (parseInt(img.style.left, 10) + 10) + "px";
}




function forward() {stop(); timer = setInterval(moveForward, 50);}
function faster() {stop(); timer = setInterval(moveFaster, 50);}
function backwards() {stop(); timer = setInterval(moveBackwards, 50);}
function stop() {clearInterval(timer);}



