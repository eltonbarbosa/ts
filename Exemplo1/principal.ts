import {Pessoa} from "./pessoa.ts"; 

 class Principal{
    
    pessoa1: Pessoa;
    pessoa2: Pessoa;
    pessoas: Pessoa[]= new Array();

    preencher(){
        
        this.pessoa1  = new Pessoa("Daniela");
        this.pessoa2 = new Pessoa("Ana");
        this.pessoas.push(this.pessoa1);
        this.pessoas.push(this.pessoa2);
     
        this.pessoas.forEach( (p:Pessoa)=>
             document.body.innerHTML = p.sayHello()
        );
    }

    
 }
 
 