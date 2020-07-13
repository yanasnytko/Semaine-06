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

Évidement si vous tenter de placer des balises HTML dans votre page, ceux-ci vont être rendu par votre navigateur. Il faudra donc ruser et utiliser soit des `<textarea>` pour afficher le code ou alors vous pouvez utiliser le petit script suivant pour encapsuler vos tags dans la balise `<pre>`.

Placez le script suivant dans une page `script.js` et liez la page avec vos pages HTML.

```js
    function encodePreElements() {
    var pre = document.getElementsByTagName('pre');
    for(var i = 0; i < pre.length; i++) {
        var encoded = htmlEncode(pre[i].innerHTML);
        pre[i].innerHTML = encoded;
    }
    };

    function htmlEncode(value) {
      var div = document.createElement('div');
      var text = document.createTextNode(value);
      div.appendChild(text);
      return div.innerHTML;
    }
  ```

Modifier votre balise `<body>`pour lancer la fonction au démarrage de la page

```html
<body onLoad='encodePreElements()'>
```
