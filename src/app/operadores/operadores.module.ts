import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperadoresAritmeticosComponent } from './operadores-aritmeticos/operadores-aritmeticos.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    OperadoresAritmeticosComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    OperadoresAritmeticosComponent,
    CheckboxComponent
  ]
})
export class OperadoresModule { }
