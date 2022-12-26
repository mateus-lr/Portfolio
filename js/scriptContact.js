var subtitle = document.getElementById('subtitle');

var typewriter = new Typewriter(subtitle, {
  loop: true,
  delay: 95
});

typewriter.typeString("<strong>Available for ...<strong>")
  .pauseFor(1000)
  .deleteChars(3)
  .typeString("<strong>questions<strong>")
  .pauseFor(1000)
  .deleteChars(9)
  .typeString("<strong>jobs<strong>")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("<strong>coffe ☕<strong>")
  .pauseFor(2000)
  .start();

  // AOS Animation
  AOS.init(
    {
      duration: 1200,
      once: true,
    }
  );