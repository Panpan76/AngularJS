angular.module("servicesApp").controller("servicesController", ["$http", function($http){
  this.promos = null;

  $http.get('promo.json').then(
    function(response){
      this.promos = response;
    }, function(response){
      console.log("Error : "+response);
    }
  );

  this.services = [
                      {
                          name: 'Web Development',
                          price: 300,
                          active:true
                      },{
                          name: 'Design',
                          price: 400,
                          active:false
                      },{
                          name: 'Integration',
                          price: 250,
                          active:false
                      },{
                          name: 'Formation',
                          price: 220,
                          active:false
                      }
                  ];

  this.nbSelect = 1;

  this.change = function(service){
    if(service.active){
      service.active = false;
    }
    else{
      service.active = true;
    }
  }

  this.sommeTotal = 0;

  this.total = function(){
    val = 0;
    nb = 0;
    angular.forEach(this.services, function(value, key){
      if(value.active){
        val += value.price;
        nb++;
      }
    });
    this.nbSelect = nb;
    this.sommeTotal = val;
    this.verifPromo();
    return val;
  };

  this.texteCode;
  this.reduc = 0;

  this.verifPromo = function(){
    var texte = this.texteCode;
    var total = this.sommeTotal;
    var promo = 0;
    angular.forEach(promos.data, function(valeur, code){
      if(texte == code){
        console.log(valeur);
        promo = total*valeur;
        console.log(this.reduc);
      }
    });
    this.reduc = promo;
  }

}])
.filter('currencyFR', ['numberFilter', function(numberFilter){
  return function(input, symbol){
    if(isNaN(input)){                   // on vérifie que l'entrée soit effectivement un nombre
      return input;                   // sinon on renvoie tout simplement l'entrée
    } else{
      symbol = symbol || "€" ;        // € par défaut, sinon, on récupère le symbole donné
      input = numberFilter(input,2);  // utilisation du filtre number pour afficher le montant
      return input + ' ' + symbol;    // on retourne la chaîne entière
    }
  };
}]);
