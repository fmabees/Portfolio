var cat = document.getElementById("cat");
var arrow1 = document.getElementById("arrow");
function hover() {
  cat.style.width = "400px";
}
function smaller() {
  cat.style.width = "350px";
}

function moveRight() {
  arrow1.style.left = (arrow1.style.left+10)+"px";
}
