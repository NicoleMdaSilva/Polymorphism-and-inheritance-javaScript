import { Animal } from "./Animal";
import { ICanWalk } from "./ICanWalk";
import { IemmitSound } from "./IEmmitSound";
import { IClimbTree } from "./IClimbTree";

class Sloth extends Animal implements ICanWalk, IemmitSound{
    private climbTree: boolean;

    constructor(name: string, age: number, climbTree: boolean){
        super(name, age);
        this.climbTree = climbTree;
    }
    public climb(): void{
        if(this.climbTree == true){
            console.log(`${this.name} can climb tree!!!`);
        }
    }

    public walk(): void {
        console.log(`${this.name} can walk!`);
    }
    public sound(): void {
        console.log(`${this.name} can produce sound!`);
    }
}
export{ Sloth }