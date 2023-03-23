import { Component, Input, OnInit } from '@angular/core';
import { Veicolo } from './singolo.module';

@Component({
  selector: 'app-singolo',
  templateUrl: './singolo.component.html',
  styleUrls: ['./singolo.component.css']
})
export class SingoloComponent implements OnInit {
  @Input() veicolo: Veicolo;
  rangeValue: number = 0;

  constructor() {

  }

  onNew() {
    this.veicolo.setPrezzo(this.rangeValue)
  }
  ngOnInit() {

  }
}
