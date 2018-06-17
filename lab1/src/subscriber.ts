const subscribers:Array<Subscriber> = new Array<Subscriber>();

export function addSubscriber(subscriber:Subscriber) {
    subscribers.push(subscriber)
}

export function allSubscribers():Array<Subscriber>{
    return subscribers;
}

export class Subscriber {

    private _nome:string
    private _email:string

    constructor(nome:string, email:string){
        this._nome = nome
        this._email = email
    }

    set nome(nome:string){
        this._nome = nome
    }

    set email(email:string){
        this._email = email
    }

    get nome():string{
        return this._nome
    }

    get email():string{
        return this._email
    }
}