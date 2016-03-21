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
