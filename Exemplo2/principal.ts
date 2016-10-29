import {Dog} from "./dog.ts"; 
import {Horse} from "./horse.ts"; 
import {Animal} from "./animal.ts"; 
class Principal{
    
    sam = new Dog("Sam");
    tom: Animal = new Horse("Tommy");
     
     move(){
         this.sam.move();
         this.tom.move(34);
     }

}
    