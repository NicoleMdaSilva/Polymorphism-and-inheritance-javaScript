import { Animal } from "./Animal";
import { ICanWalk } from "./ICanWalk";
import { IemmitSound } from "./IEmmitSound";

class Dog extends Animal implements ICanWalk, IemmitSound{
    
    constructor(name: string, age: number){
        super(name, age);
    }
    public walk(): void {
        console.log(`${this.name} can walk!`);
    }
    public sound(): void {
        console.log(`${this.name} can produce sound!`);
    }
}

export { Dog }