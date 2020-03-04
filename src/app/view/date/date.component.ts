import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dataAtual: Date;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.dataAtual = new Date();
    }, 1);
  }

}
