const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");
let idx = 0;
const run = function () {
  idx++;
  if (idx >= img.length) {
    idx = 0;
  }
  console.log(idx);
  imgs.style.transform = `translateX(${-1 * idx * 500}px)`;
};
setInterval(run, 2000);
