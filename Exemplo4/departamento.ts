export abstract class Departamento {
 
    constructor(public name: string) {
    }
 
    printName(): void {
        console.log('Department name: ' + this.name);
    }
 
    abstract printMeeting(): void; // tem que ser implementado nas classes filhas
}
 
