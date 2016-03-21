(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("calculatriceApp", []);
angular.module("calculatriceApp").controller("calculatriceController", ["$http", require("./calculatriceController")]);
angular.module("calculatriceApp").directive("btCalc", ["$compile", require("./directiveBouton")]);

},{"./calculatriceController":2,"./directiveBouton":3}],2:[function(require,module,exports){
module.exports = function($http){

  this.bts = [
    {value:'('},
    {value:')'},
    {value:'M'},
    {value:' '},
    {value:'RM'},
    {value:'Off',cssClass:"btn-danger",title:"Eteindre la calculatrice"},
    {value:'\n'},
    {value:"⇤"},
    {value:"CE"},
    {value:"C"},
    {value:" "},
    {value:"±"},
    {value:"√x"},
    {value:"\n"},
    {value:7},
    {value:8},
    {value:9},
    {value:' '},
    {value:'/'},
    {value:'%'},
    {value:'\n'},
    {value:4},
    {value:5},
    {value:6},
    {value:' '},
    {value:'*'},
    {value:'1/x'},
    {value:'\n'},
    {value:1},
    {value:2},
    {value:3},
    {value:' '},
    {value:'-'},
    {value:'+'},
    {value:'\n'},
    {value:0,cssClass:"colspan btn-default"},
    {value:'.',cssClass:"btn-default"},
    {value:' '},
    {value:'=',cssClass:"colspan btn-success",title:"Calculer ([ENTREE]) !"}
  ];

};

},{}],3:[function(require,module,exports){
module.exports = function($compile){
  return{
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {value: '@', onAdd: '&', css: '@'},
    link: function(scope, elem, attr){
      switch(scope.value){
        case '\n':
          elem.replaceWith($compile('<br /><br /><br />')(scope));
          break;

        case ' ':
          elem.replaceWith($compile('<div class="sepCalc"></div>')(scope));
          break;

        default:
          elem.replaceWith($compile('<div class="btn boutonCalc {{css}}">{{value}}</div>')(scope));
          break;
      }
    }
  }
};

},{}]},{},[1]);
