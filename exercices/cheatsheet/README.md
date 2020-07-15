# Cheat Sheet

Vous allez réaliser vos propres Cheat Sheet. Mais qu'est-ce qu'une cheat sheet? C'est un peu votre compagnon de route pour votre quête vers le savoir suprême d'un langage de programmation. Vous allez recenser toutes vos connaissances de manière condensée pour avoir facilement accès à ces informations là en cas de léger oubli ou de doute.

## Consignes

Vous devez réaliser une Cheat Sheet par langage: HTML, CSS et JS.

* Chaque CS doit posséder son style unique. Créez votre "univers" par rapport au langage.
* Chaque CS doit être réaliser en HTML.
* Chaque CS doit posséder une feuille de style CSS qui lui est propre.
* Chaque CS doit avoir des exemples fonctionnels de code (indiquer le code et montrer un exemple). Vous ne devez pas le faire pour chaque balise, propriété ou méthode. Montrez des exemples complets d'utilisation ou des bouts de code que vous avez du mal à visualiser sans exemple.
* Pour vous aidez dans votre tâche, revisitez les différentes semaines qui sont passées, relisez la théorie et parcourrez les exercices.

Soyez inventif, rendez chaque CS interactive grâce à vos nouvelles connaissances de développeur. N'hésitez pas non plus à revenir les mettre à jour quand vous aurez de nouvelles compétences.

Bon travail!!

## Afficher des tag HTML dans une page HTML

Évidement si vous tenter de placer des balises HTML dans votre page, ceux-ci vont être rendu par votre navigateur. Il faudra donc ruser pour afficher le code. Voici plusieurs solutions:

### Textarea

Il est possible d'utiliser un champ `textarea`pour y coller votre code. Ainsi, ce dernier s'affichera sans être rendu par le navigateur. Vous pouvez ensuite cibler votre `textarea`dans votre feuille de style css pour lui donner un style un peu plus sympa que celui par défaut.

```html
<textarea row="5" cols="55">
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
</textarea>
```

### Votre balise HTML

Une solution serait de créer une balise HTML propre à vous et avec les pseudo-sélecteurs d'ajouter les `<>`. C'est un peu plus modulable mais demandera une certaine rigueur pour ne pas oublier de mettre votre propre balise devant juste le nom de la balise que vous voulez afficher.

```html
<kode>div</kode>
```

```css
kode:before{
  content:"<"
}
kode:after{
  content:">"
}
```

### Script JS

Placez le script suivant dans une page `script.js` et liez la page avec vos pages HTML.

```javascript
 var parserRules = [
        { pattern: /</g, replacement: '&lt;' },
        { pattern: />/g, replacement: '&gt;' },
        { pattern: /<html>/g, replacement: 'html&#8232' },
      ];

      document.querySelectorAll('.code').forEach(function(tag) {
        var inner = tag.innerHTML;
        parserRules.forEach(function(rule) {
          inner = inner.replace(rule.pattern, rule.replacement)
        });
        tag.innerHTML = inner;
      });
  ```

Ce bout de script va remplacer vos chevrons (`<>`) par leurs unicode html `&lt;` et `&gt;`. Cela devrait afficher vos balises comprise à l'intérieur de la classe `.code`. Petit soucis c'est que vos balises `html`et `head`et `body`ne s'afficheront pas malgré tout. La solution est juste en dessous.

```html
<div class="code"> <!-- s'affichera PAS -->
  <div> <!-- s'affichera -->
    <p> <!-- s'affichera -->
      <img> <!-- s'affichera -->
    </p> <!-- s'affichera -->
  </div> <!-- s'affichera -->
</div> <!-- s'affichera PAS -->
```

### Séparateur

Vous pouvez utiliser un `line separator` en insérant ce bout de code `&#8232` devant le nom de vos balises.

```html
<&#8232html>
```
