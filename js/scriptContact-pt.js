var subtitle = document.getElementById('subtitle');

var typewriter = new Typewriter(subtitle, {
  loop: true,
  delay: 140
});

typewriter.typeString("<strong>Disponível para ...<strong>")
  .pauseFor(1500)
  .deleteChars(3)
  .typeString("<strong>perguntas<strong>")
  .pauseFor(1500)
  .deleteChars(9)
  .typeString("<strong>trabalhos<strong>")
  .pauseFor(1500)
  .deleteChars(9)
  .typeString("<strong>tomar um café ☕<strong>")
  .pauseFor(2000)
  .pauseFor(5000)
  .start();

  // AOS Animation
  AOS.init(
    {
      duration: 1200,
      once: true,
    }
  );