fetch("/PracticeWeb1/assets/img/icons/sprite.svg")
  .then(r => r.text())
  .then(svg => {
    document.getElementById("svg-sprite").innerHTML = svg;
  })
  .catch(err => console.error("SVG sprite load failed:", err));




