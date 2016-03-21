angular.module("calculatriceApp", []);
angular.module("calculatriceApp").controller("calculatriceController", ["$http", require("./calculatriceController")]);
angular.module("calculatriceApp").directive("btCalc", ["$compile", require("./directiveBouton")]);
