// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makeHorse = function(name) {
  var result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name + ' is galloping to ' + destination + '!';
  };
  return result;
};

var makeFlyingHorse = function(name, color) {
  var result = makeHorse(name);
  result.color = color;
  var oldGoSomewhere = result.goSomewhere;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return name + ' is flying to ' + destination + '!';
    }
  };
  return result;
};

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!
// Do not use the ES6 `class` keyword; use ES5 to create your classes.

var Horse = function(name) {
  this.name = name
};

Horse.prototype.goSomeWhere = function(destination) {
  return this.name + ' is galloping to ' + destination + '!';
}


var FlyingHorse = function(name, color) {
  Horse.call(this,name);
  this.color = color;
};

FlyingHorse.prototype = Object.create(Horse.prototype);
FlyingHorse.prototype.goSomeWhere = function(destination,milesToDestination) {
  if (milesToDestination < 10) {
      return  Horse.prototype.goSomeWhere.call(this,destination) 
    } else {
      return this.name + ' is flying to ' + destination + '!';
    }
 
  
};
FlyingHorse.prototype.constructor = FlyingHorse


