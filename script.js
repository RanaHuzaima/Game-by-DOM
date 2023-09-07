function hits() {
  var hits = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".elm1").textContent = hits;
}

function bubble() {
  var clutter = "";
  for (let i = 1; i <= 168; i++) {
    let val = Math.floor(Math.random() * 10 + 1);
    var bubble = clutter += `<div class="bubble">${val}</div>`;
  }
  document.getElementById("pbtm").innerHTML = clutter;
}

function runtimer() {
  let timer = 60;
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".elm2").textContent = timer;
    } else {
      clearTimeout(timer);
    }
  }, 1000);
}

