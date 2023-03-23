export class Veicolo {
    id: number;
    modello: string;
    marca: string;
    prezzo: number;
    velocitamax: number;

    constructor(id: number, modello: string, marca: string, prezzo: number, velocitamax: number) {
        this.id = id;
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
        this.velocitamax = velocitamax;
    }
}