import { Template } from '@angular/compiler/src/render3/r3_ast';
import {Component} from '@angular/core';
@Component({
    selector: 'app-contador',
    template: ` <h1>{{title}}</h1>
    <h3>La base es: <strong> {{base}}</strong></h3>
    <button (click) ="acumular(-base)"> -{{base}}</button>
    <span>{{num}}</span>
    <button (click) ="acumular(base)">+{{base}}</button>`
})
 export class ContadorComponent{
    title: string = 'Contadro App';
    num  : number = 10;
    base : number = 5;
 
    sumar():number {
    return  this.num +=1;
    }
 
    restar():number {
     return  this.num -=1;
     }
 
     acumular(valor: number){
       this.num += valor;
     }
}