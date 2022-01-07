import { Component } from "@angular/core";


@Component({
    selector: 'app-cont',
    template: `
        <h1>{{titulo}}</h1>
        <h3><Strong>{{base}}</Strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>
        <span>{{cont}}</span>
        <button (click)="acumular(-base)"> - {{base}} </button>

    `

})
export class ContadorComponent{
    titulo: string = 'Contador App';
    cont: number = 0;

    base:number = 5;

    acumular(valor:number){
        this.cont += valor;
  }
}   