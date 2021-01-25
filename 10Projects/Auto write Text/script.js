const text = "Hey !! I am Akansha!!    ";

let index = 0;
function writeText() {
  document.body.innerText = text.slice(0, index + 1);

  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 100);

// new TypeIt("#simpleUsage", {
//   strings: "This is a simple string.",
//   speed: 50,
//   waitUntilVisible: true,
// }).go();
