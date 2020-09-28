
var box = document.querySelector('.form');
box.addEventListener("mousemove", runEvent);
function runEvent(e){
  document.querySelector(".top").style.backgroundColor = "rgb(" + e.offsetX +","+ e.offsetY +", 40)";
}
