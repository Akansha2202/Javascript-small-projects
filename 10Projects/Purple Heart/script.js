function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  heart.innerText = "💜";
  heart.style.left = `${Math.random() * 100 + 1}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
