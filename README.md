# redux-saga-simple

Le but principal de Redux-Saga est de proposer une manière de gérer des effets de bord dans une application utilisant Redux. Pour cela, de la même manière que dans notre exemple précédent où nous déclenchions des effets pour demander une saisie de l’utilisateur ou lui afficher une valeur, nous allons déclencher des effets de Redux-Saga, cette fois-ci pour interagir avec Redux ou déclencher d’autres effets de bord.

Les effets qu’il est possible de déclencher dans Redux-Saga sont de plusieurs types. L’effet call par exemple permet d’appeler une fonction, éventuellement asynchrone, et d’en récupérer le résultat. Typiquement, il s’agit d’une fonction ayant justement des effets de bord, comme une requête à une API.

Des effets permettent de manipuler le store de Redux :
* select lit une valeur dans le store grâce à un sélecteur, de manière semblable au hook useSelector.
* put dispatche une action.
* take attend l’arrivée d’une action d’un type donné.

Enfin, des effets permettent de manipuler l’exécution de la saga elle-même : fork pour dupliquer l’exécution de la saga courante, delay pour attendre une certaine durée, etc.

# Installation
```
yarn
or
yarn install
```

# Execution d'un test en dev
```
yarn dev
```

# Auteur
* Exercice issu du livreReact Développez le Front End de vos applications web et mobiles avec JavaScript : https://github.com/scastiel
* Rudy TUANI : adaptation du Framework vitejs avec les dernières versions de librairies.
