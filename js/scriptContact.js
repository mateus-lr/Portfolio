var subtitle = document.getElementById('subtitle');

var typewriter = new Typewriter(subtitle, {
  loop: true,
  delay: 110
});

typewriter.typeString("<strong>Available for ...<strong>")
  .pauseFor(1200)
  .deleteChars(3)
  .typeString("<strong>questions<strong>")
  .pauseFor(1200)
  .deleteChars(9)
  .typeString("<strong>jobs<strong>")
  .pauseFor(1200)
  .deleteChars(4)
  .typeString("<strong>coffe ☕<strong>")
  .pauseFor(2000)
  .start();