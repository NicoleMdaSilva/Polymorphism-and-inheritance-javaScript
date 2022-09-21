"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Horse_1 = require("./Horse");
var Dog_1 = require("./Dog");
var Sloth_1 = require("./Sloth");
function climb(animal) {
    animal.climb;
}
function Sounding(animal) {
    animal.sound;
}
function walking(animal) {
    animal.walk;
}
var horse = new Horse_1.Horse('Joaquin', 4);
console.log("The horse ".concat(horse.name, " is ").concat(horse.age, " years old."));
Sounding(horse);
walking(horse);
var dog = new Dog_1.Dog('Christoffer', 7);
console.log("The dog ".concat(dog.name, " is ").concat(dog.age, " years old."));
Sounding(dog);
walking(dog);
var sloth = new Sloth_1.Sloth('Flash', 3, true);
console.log("The sloth ".concat(sloth.name, " is ").concat(sloth.age, " years old."));
climb(sloth);
