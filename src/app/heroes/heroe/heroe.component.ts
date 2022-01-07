import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: string = 'ironman';
    edad  : number = 45

    get nombreCapitalizadoCompleto(): string{
        return this.nombre.toUpperCase()
    }

    getNombre(): string{

        return `${this.nombre} - ${this.edad}`
        //return this.nombre + ' ' + this.edad;
    }

    capitalizado(): string {

        const nom: string = this.getNombre().replace(/^\w/, (c) => c.toUpperCase());
        return nom;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 21;
    }
    
}