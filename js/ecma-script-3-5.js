// Ecma Script 3, 5
'use strict';

function Animal(){}
Animal.prototype.getName = function(){
	return this.name;
};

function Dog(name){
	this.name = name;
	this.bark = function(){
		return "Dog " + this.name + " is barking";
	};

}
Dog.prototype = inherit(Animal.prototype);


var dog = new Dog('Aban');
console.log(dog.getName() === 'Aban'); // true
console.log(dog.bark() === 'Dog Aban is barking'); // true



function inherit(Obj){
	if(Obj == null) throw TypeError();
	if(Object.create){
		return Object.create(Obj);
	}
	var typeObj = typeof Obj;
	if(typeObj !== 'object' && typeObj !== 'function') throw TypeError();
	function f(){}
	f.prototype = Obj;
	return new f();
}



