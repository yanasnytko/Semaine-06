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

// HTML 6
document.getElementById("html6").addEventListener("click", () => {
  window.alert("Je suis un texte visible");
});
