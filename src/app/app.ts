import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calculadora';

  resultadoDisplay: string = '';
  numAnterior: string = '';
  numProximo: string = '';
  operacao: string = '';

  apresentarNum(num: String){
    this.numAnterior += num;
    this.resultadoDisplay = this.numAnterior;
  }

  setOperacao(op: string) {
    if (this.numAnterior === '') return;

    this.numProximo = this.numAnterior;
    this.numAnterior = '';
    this.operacao = op;
    this.resultadoDisplay = `${this.numProximo} ${op}`;
  }

  calcular(){
    let resultado: number;

    const anter = parseFloat(this.numAnterior);
    const prox = parseFloat(this.numProximo);

    if (isNaN(anter) || isNaN(prox)) return;

    switch (this.operacao) {
      case '+':
        resultado = anter + prox;
        break;
      case '-':
        resultado = anter - prox;
        break;
      case '*':
        resultado = anter * prox;
        break;
      case '/':
        resultado = anter / prox;
        break;
      default:
        return;
    }
      this.resultadoDisplay = resultado.toString();
      this.numAnterior = resultado.toString();
      this.numProximo = '';
      this.operacao = '';
  }

  //limpar o display
  limpar(){
    this.resultadoDisplay = '';
    this.numAnterior = '';
    this.numProximo = '';
    this.operacao = '';
  }
}
