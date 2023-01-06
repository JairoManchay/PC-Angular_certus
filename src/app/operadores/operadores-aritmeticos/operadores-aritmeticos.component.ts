import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadores-aritmeticos',
  templateUrl: './operadores-aritmeticos.component.html',
  styleUrls: ['./operadores-aritmeticos.component.css']
})
export class OperadoresAritmeticosComponent{

  numero1 =0;
  numero2 = 0;
  lista: any[] = ["suma","resta","multiplicacion","division"];
  data = Object.values(this.lista);
}
