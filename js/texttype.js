/* Animation texte d'introduction */
var test = document.getElementById("type-writer");

var text = "Hello World! Je suis Lauréane Deschamps, designer graphique."; //put your text here
var result = "";
//Press rerun button to see effect
window.addEventListener("load", (event) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      result += text[i];
      test.innerHTML = result;
    }, 40 * i);
  }
});