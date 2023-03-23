import { Component } from '@angular/core';
import { Veicolo } from './singolo/singolo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veicoli';

  //Per nulla ispirato ad angular-reddit ;)
  veicoli: Veicolo[];
  app_display: string = "";
  value: number = 0;
  testo: string = "Visualizzazione in ordine di velocità massima";

  constructor() {
    this.veicoli = [
      new Veicolo(1, '127', 'Fiat', 1300, 110),
      new Veicolo(2, 'Giulietta', 'Alfa Romeo', 4000, 180),
      new Veicolo(3, 'Fiesta', 'Ford', 1600, 130),
      new Veicolo(4, 'Baracca', 'Subaru', 5500, 170),
    ]
    
  }

  onClickUp(){
    this.value += 1;

    if(this.value == 2) {
      this.value = 0;
    }
    
    if(this.value == 0) {
      this.testo = "Visualizzazione in ordine di velocità massima";
    } else if(this.value == 1) {
      this.testo = "Visualizzazione in ordine dei costi"
    }
  }

  sortedVeicoli(): Veicolo[] {
    
    if(this.value == 1) {
      return this.veicoli.sort((a: Veicolo, b: Veicolo) => b.prezzo - a.prezzo);
    } 

    return this.veicoli.sort((a: Veicolo, b: Veicolo) => b.velocitamax - a.velocitamax);
  }
}
