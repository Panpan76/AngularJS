(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("routeApp", ['ngRoute'])
.controller('RouteMoi', [require("./routeMoi")])
.controller('RouteFilms', [require("./routeFilms")])
.controller('RouteForm', [require("./routeForm")])
.config(['$routeProvider', require('./routes')]);

},{"./routeFilms":2,"./routeForm":3,"./routeMoi":4,"./routes":5}],2:[function(require,module,exports){
module.exports = function(){
  this.titre = "Les films que j'aime";

  this.titreTab = ['Titre', 'Description', 'Lien', 'Image'];

  this.tab = [
    {
      'titre': 'Harry Potter',
      'description': 'Un film plein de magie.',
      'url': 'http://fr.harrypotter.wikia.com/wiki/Wiki_Harry_Potter',
      'image': 'http://vignette3.wikia.nocookie.net/harrypotter/images/c/c5/Wizarding-world-of-harry-potter-logo.jpg/revision/latest?cb=20121218193904'
    }, {
      'titre': 'Star Trek',
      'description': "L'Espace, l'ultime frontière. Ce sont les voyages du vaisseau Enterpris . Sa mission de cinq ans : explorer de nouveaux mondes étranges, chercher de nouvelles vies et de nouvelles civilisations, aller là où aucun homme n'est allé avant.",
      'url': 'https://fr.wikiquote.org/wiki/Star_Trek_%28s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e%29',
      'image': 'http://ekladata.com/mlHP65W-X5MWP60LiZ6-cuxND5s.jpg'
    }
  ];
};

},{}],3:[function(require,module,exports){
module.exports = function(){
  this.titre = "Un petit formulaire";
};

},{}],4:[function(require,module,exports){
module.exports = function(){
  this.titre = "A propos de moi...";

  this.titreTab = ['Element', 'Valeur'];

  this.tab = [
    {
      'titre': 'Taille',
      'description': '1.81m'
    }
  ];
};

},{}],5:[function(require,module,exports){
module.exports = function($routeProvider){
  $routeProvider.
    when('/moi', {
      templateUrl: 'template/description.html',
      controller: 'RouteMoi',
      controllerAs: 'page'
    }).
    when('/films', {
      templateUrl: 'template/description.html',
      controller: 'RouteFilms',
      controllerAs: 'page'
    }).
    when('/form', {
      templateUrl: 'template/formulaire.html',
      controller: 'RouteForm',
      controllerAs: 'page'
    })
}

},{}]},{},[1]);
