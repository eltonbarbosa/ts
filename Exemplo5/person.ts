export class Person {
	private _name: string;
 
	get name(): string {
		return this._name;
	}
 
	set name(p : string) {
		this._name = p;
	}
}