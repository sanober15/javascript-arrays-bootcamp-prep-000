var ingredient1 = 'bread'
var ingredietn2 = 'mild cheese'
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

var chocolateBars = ['snickers','hundred grands','kitkat', 'skittles']

function addElementToBeginningOfArray(a, b){


  var x = [b,...a];
  return x;
}

function destructivelyAddElementToBeginningOfArray(a,b){


  return a.unshift('b');

}
