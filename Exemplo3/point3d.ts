import {Point} from "./point.ts"; 

class Point3d implements Point{
    x: number = 1;
    y: number = 2;
    showX() {
        console.log(this.x);
    }
}
 
var point = new Point3d();
point.showX();