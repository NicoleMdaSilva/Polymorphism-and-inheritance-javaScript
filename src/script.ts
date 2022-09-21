import { Horse } from "./Horse";
import { Dog } from "./Dog";
import { Sloth } from "./Sloth";
import { ICanWalk } from "./ICanWalk";
import { IemmitSound } from "./IEmmitSound";
import { IClimbTree } from "./IClimbTree";

function climb(animal: IClimbTree){
    animal.climb
}
function Sounding(animal: IemmitSound){
    animal.sound
}
function walking(animal: ICanWalk){
    animal.walk
}

const horse = new Horse('Joaquin', 4);

console.log(`The horse ${horse.name} is ${horse.age} years old.`);
Sounding(horse);
walking(horse);

const dog = new Dog('Christoffer', 7);

console.log(`The dog ${dog.name} is ${dog.age} years old.`);
Sounding(dog);
walking(dog);

const sloth = new Sloth('Flash', 3, true);
console.log(`The sloth ${sloth.name} is ${sloth.age} years old.`);
climb(sloth);


