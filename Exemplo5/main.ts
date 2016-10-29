import {Person} from './person.ts';
 
//Instanciando classe person
let person = new Person();
 
//Setando nome
person.name = "Daniela";
 
//Pegando nome e atribuindo a elemento DOM
document.getElementById("name").innerHTML = person.name;