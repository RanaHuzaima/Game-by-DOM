var hits;
function gethits() {
  hits = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".elm1").textContent = hits;
}

function bubble() {
  var clutter = "";
  for (let i = 1; i <= 168; i++) {
    var val = Math.floor(Math.random() * 10 + 1);
    clutter += `<div class="bubble">${val}</div>`;
  }
  document.getElementById("pbtm").innerHTML = clutter;
}

let timer = 60;
function runtimer() {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".elm2").textContent = timer;
    } else {
      clearTimeout(timer);
    }
  }, 1000);
};

var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector(".elm3").textContent = score;
}

document.getElementById("pbtm").addEventListener("click",function(dets){
  var tg = Number(dets.target.textContent);
  if(tg === hits){
    increaseScore()
    bubble()
    gethits()
  }
})
bubble();
runtimer();
gethits();