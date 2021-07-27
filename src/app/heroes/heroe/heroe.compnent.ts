import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    name: string = 'Ironman';
    age: number = 45

    get nameCapitalizado(){
        return this.name.toUpperCase();
    }
    obtenerNombre(): string {
        return `${ this.name } - ${ this.age}`;
    }

    cambiarName () :void{
        this.name = 'Spiderman'
    }

    cambiarAge() : void {
        this.age = 30;
    }
}