angular.module('servicesApp').directive('contactElem', function(){
  return {
    restrict: 'A',
    template: '<td>{{contact.nom}}</td><td>{{contact.prenom}}</td><td>{{contact.mail}}</td><td><button ng-click="ctrl.toUpdate(contact)">[...]</button><button ng-click="ctrl.delete(contact)">[X]</button></td>'
  };
}).directive('frmContact', function(){
  return {
    restrict: 'A',
    templateUrl: 'formulaireContact.html'
  };
});
