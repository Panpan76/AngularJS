(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("monaieApp", []);
angular.module("monaieApp").controller("monaieController", ["$http", require("./monaieController")]);

},{"./monaieController":2}],2:[function(require,module,exports){
module.exports = function($http){

  var self = this;
  this.monaies;

  $http.get('monaies.json').
    success(function(data, status, headers, config) {
        self.monaies = data;
    }).
    error(function(data, status, headers, config) {
        console.log("Erreur avec le statut Http : "+status);
    });

  this.from;
  this.to;
  this.taux;
  this.combien;
  this.resultat;
  this.historique = [];

  this.getResultat = function(){
    $http.jsonp('http://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code+'&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        self.taux = data[self.from.code+'_'+self.to.code].val;
        self.resulat = self.taux * self.combien;
      });
    var conv = {
      from: self.from,
      to: self.to,
      amount: self.resultat
    };
    self.historique.push(conv);
  };

  this.echange = function(){
    var temp = self.from;
    self.from = self.to;
    self.to = temp;
  };

};

},{}]},{},[1]);
