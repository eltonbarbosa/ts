import {Animal} from "./animal.ts"; 
export class Dog extends Animal {

        constructor(name: string) { super(name); }

        move(meters = 5) {
            alert("Slithering...");
            super.move(meters);
        }

    }