export class Task {

    private _titulo:string
    private _pronto:boolean
    private _prioridade:number

    constructor(titulo:any, pronto:boolean, prioridade:number){
        this._titulo = titulo
        this._pronto = pronto
        this._prioridade = prioridade
    }

    set titulo(titulo:string){
        this._titulo = titulo
    }

    set pronto(pronto:boolean){
        this._pronto = pronto
    }

    set prioridade(prioridade:number){
        this._prioridade = prioridade
    }

    get titulo():string{
        return this._titulo
    }

    get pronto():boolean{
        return this._pronto
    }

    get prioridade():number{
        return this._prioridade
    }
}