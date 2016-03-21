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
