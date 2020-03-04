import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.css']
})
export class ExibirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dizerOi(): void {
    alert('salve salve yodinha');
  }

  soma(): void {
    const n1 = Number(prompt('Digite o 1º numero: '));
    const n2 = Number(prompt('Digite o 2º numero: '));

    const rest = n1 + n2;

    alert('A soma do numero digitado é: ' + rest);

  }

}
