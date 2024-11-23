function typeWriter(textElementId, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      // Add a condition to insert a line break when reaching a certain point
      if (i === 26 || i === 61 || i === 61) {
        document.getElementById("typed-text").innerHTML += "<br>"; // Insert a line break
      }
      document.getElementById("typed-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
}

window.onload = function () {
  typeWriter(
    "typed-text",
    "Hi, my name is Jiyeon Lee! The pronunciation is 'Zee-on' Lee. You can call me Jenny if too difficult to pronounce.",
    100
  );
};
