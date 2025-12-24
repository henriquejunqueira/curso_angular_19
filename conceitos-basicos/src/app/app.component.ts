import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MinhapaginaComponent } from './minhapagina/minhapagina.component';
// import { HelloWorldComponent } from './helloworld/helloworld.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  // imports: [HelloWorldComponent, MinhapaginaComponent],
  // imports: [CalculadoraComponent],
  imports: [ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conceitos-basicos';
}
