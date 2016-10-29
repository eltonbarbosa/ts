import {Animal} from "./animal.ts"; 
export class Horse extends Animal {

        constructor(name: string) { super(name); }

        move(meters = 45) {
            alert("Galloping...");
            super.move(meters);
        }
        
    }