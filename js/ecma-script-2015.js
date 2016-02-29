// Ecma Script 2015
'use strict';

class Animal{
	getName() {
		return this.name;
	}
}

class Dog extends Animal{
	constructor(name, shureName){
		super();
		this.name = name;
		this.shureName = shureName;
	}
	bark(){
		return "Dog " + this.name + " is barking";
	}
}
var dog = new Dog('Aban');

console.log(dog.getName() === 'Aban'); // true
console.log(dog.bark() === 'Dog Aban is barking'); // true


