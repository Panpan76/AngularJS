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
