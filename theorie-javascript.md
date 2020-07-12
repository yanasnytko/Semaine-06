# Javascript

## Introduction

Pour cette sixième et dernière semaine d'apprentissage des bases fondamentales du Javascript, nous allons aborder quelques sujets à titre de complément d'information.
Nous explorerons quelques façon différentes de manipuler les tableaux.
Ensuite nous verrons en quoi consiste les fonctions dites "callback".
Et pour finir je vous introduirais la méthode "setTimeOut()" permettant de réaliser un bout de code après l'expiration d'un temps défini.

## Table des matières

1. Filter, Reduce, Map, Includes, une nouvelle façon de manipuler les tableaux
2. Fonctions callback
3. La méthode setTimeOut()

## Filter, Reduce, Map, Include une nouvelle façon de manipuler les tableaux

Nous l'avons vu, dans le web le type de données sous forme de tableaux est omniprésent, en Javascript il s'agit d'un objet global qui possède un tas de méthode afin de les manipuler et d'en récupérer les valeurs:

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

Vous serez régulièrement appellé à devoir les modifier avant d'être en mesure d'utiliser les données qu'il contient.
Nous avons déjà eu l'occasion de voir les méthodes forEach, push, pop, shift, findIndex. Cette semaine nous allons aborder les méthodes filter, reduce, map, et include.

### Filter

Comme son nom l'indique, la méthode filter permet d'appliquer un filtre personnalisé, et ensuite de renvoyer le résultat de ce filtre dans un nouveau tableau.
Exemple d'utilisation:

```js
let siriusTeamArray = ["jeremy", "vincent", "david", "christophe", "laetitia", "julie", "gregory"];
let newarray = siriusTeamArray.filter(el => el === "laetitia");
console.log(newarray);
```

Dans l'exemple ci-dessus le filtre demande de retourner les éléments du tableau correspondant strictement à la chaîne de caractère "laetitia".
On stock la valeur du filtre à l'intérieur d'une nouvelle variable qui contiendra après application le nouveau tableau d'éléments retourné par filter.
En l'occurence l'output sera: ["laetitia"].

### Reduce

Permet d'accumuler les valeurs d'un tableau et de les réduire à une valeur unique
Par exemple, imaginons un tableau d'objet dans lequel une clé contient de nouveau un tableau. Je souhaite créer un nouveau tableau contenant toutes les valeurs de cette clé pour chaque objet.

```js
let booksOwnersDatas= [
    { "nom": "Quentin", "livres": ["City Hall", "Harry Potter"]},
    { "nom": "Alice", "livres": ["L'Avare", "Les Fleurs du Mal"]}
  ]
  
let booksArray = booksOwnersDatas.reduce((prev, curr) => {
    return [...prev, ...curr.livres];
  }, ["Perceval"]);
  console.log(booksArray)
```
Dans ce cas la console affichera les valeurs des livres pour chaque objet rassemblés au sein d'un nouveau tableau : 

```js
["Perceval", "City Hall", "Harry Potter", "L'Avare", "Les Fleurs du Mal"]
```

### Map

La fonction map performe une fonction sur chaque élément du tableau et renvoit un nouveau tableau contenant les éléments transformés.

```js
let numberArray = [1, 2, 3, 4];
let byTwoArray = numberArray.map(el => el * 2);
console.log(byTwoArray);
```

La console affichera le tableau suivant : [2, 4, 6, 8]

### Includes

Includes va chercher une occurence dans le tableau et renvoit une valeur booléenne true ou false en fonction de si il a trouvé un élément équivalent ou non.

```js
let siriusTeamArray = ["jeremy", "vincent", "david", "christophe", "laetitia", "julie", "gregory"];
console.log(siriusTeamArray.includes('laetitia'));
```
La console renvera "true" dans ce cas ci.

## 2. Les fonctions CallBack

Vous avez déjà eu l'occasion de les manipuler à plusieurs reprises. Les fonctions callback sont les fonctions de rappel appellées au sein d'autres fonctions dans leurs paramètres.
Par exemple dans un foreach, ou un addEventListener

```js
siriusTeamArray.forEach((el) => {
    console.log(el)
})
```
Dans l'exemple ci dessus la fonction callback est déclarée à l'aide de la synthaxe ES6, elle reçoit un paramètre (el) et est déclarée à l'aide d'une fat arrow function.

```js
document.getElementById("button").addEventListener("click", function handleClick(){
    console.log("Hello World");
})
```
Dans cet exemple par contre elle est bien déclarée à l'aide du mot clé function.

## 3. La méthode setTimeOut

Permet d'exécuter une fonction callback après un temps donné.
```js
window.setTimeOut(() => {
    console.log("Hello World");
}, 2000)
```

Dans l'exemple ci dessus, 2000 représente 2000 milliseconde, autrement dit 2 secondes. La fonction callback renvoit un console.log après 2 secondes.

## Conclusion

Nous voici à la fin de notre apprentissage des fondamentaux de Javascript, félicitation! 
À la rentrée nous aborderons les gros changements de l'ES6 ainsi que les frameworks!
Bon travail!