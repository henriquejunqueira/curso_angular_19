import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  primeiroValor: number = 0;
  segundoValor: number = 0;
  resultado: number = 0;

  calcularResultado() {
    console.log('Chamando o método calcularResultado()!');
    console.log('Primeiro valor: ' + this.primeiroValor);
    console.log('Segundo valor: ' + this.segundoValor);
    this.resultado = this.primeiroValor + this.segundoValor;
  }
}
