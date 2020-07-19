// Remplacement de < et > par le unicode
var parserRules = [
  { pattern: /</g, replacement: '&lt;' },
  { pattern: />/g, replacement: '&gt;' }
];

document.querySelectorAll('.-code').forEach(function (tag) {
  var inner = tag.innerHTML;
  parserRules.forEach(function (rule) {
    inner = inner.replace(rule.pattern, rule.replacement)
  });
  tag.innerHTML = inner;
});

// CSS 4
document.getElementById("css4").addEventListener("click", () => {
  document.getElementById("css4_title").style.color = "red";
});

// CSS 6_2
document.getElementById("css6_2").addEventListener("click", () => {
  document.getElementById("css6_2_para").style.color = "#22E356";
});

// CSS 6_3
document.getElementById("css6_3").addEventListener("click", () => {
  document.getElementById("css6_3_para").style.textAlign = "right";
});