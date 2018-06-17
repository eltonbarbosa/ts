import {Subscriber, addSubscriber, allSubscribers} from './subscriber'

//botao submit
let submit = document.getElementById("enviar");
let newSubscriber:Subscriber;
//Element OL onde será adicionado LI
let buildList = document.getElementById("subscribers");

submit.addEventListener('click', add);//adicionando o listener para o event click

function add(event:any){
    //Pega valores de entrada
    let nome = ((document.getElementById("name") as HTMLInputElement).value).toString();
    let email =  ((document.getElementById("email") as HTMLInputElement).value).toString();
    //Cria o objeto subscriber
    newSubscriber = new Subscriber(nome, email);
    //Adiciona o o subscriber a lista
    addSubscriber(newSubscriber);

    buildList.innerHTML = "";//Limpando a lista
    //Para cada subscriber existente no array monta os items da lista
    allSubscribers().forEach((subscriber) => {
        let li = document.createElement("li");
        let textNode = document.createTextNode(`"Nome:"${subscriber.nome} - "Email:"${subscriber.email}`);
        li.appendChild(textNode);
        buildList.appendChild(li)
    })
    //preventDefault() apenas pra não submerter o form
    event.preventDefault();
    //Limpando os campos
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
}