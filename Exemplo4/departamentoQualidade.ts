import {Departamento} from "./departamento.ts"; 

class DepartamentoQualidade extends Departamento {
 
    constructor() {
        super('Accounting and Auditing'); // constructors in derived classes must call super()
        this.tasks();
    }

    department = new DepartamentoQualidade(); // ok to create and assign a non-abstract subclass

 
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
 
    generateReports(): void {
        console.log('Generating accounting reports...');
    }

    tasks(){
        this.department.printName();
        this.department.printMeeting();
        this.department.generateReports();
    }
}
 
