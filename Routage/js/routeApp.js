angular.module("routeApp", ['ngRoute'])
.controller('RouteMoi', [require("./routeMoi")])
.controller('RouteFilms', [require("./routeFilms")])
.controller('RouteForm', [require("./routeForm")])
.config(['$routeProvider', require('./routes')]);
