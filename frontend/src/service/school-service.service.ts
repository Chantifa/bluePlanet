import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  biodiversity: BiodiversityEval | undefined;
  energie: EnergieEval | undefined;
  /* . . . */

  addBiodiversity(biodiversity: BiodiversityEval) {
    this.biodiversity = biodiversity;
  }

  getBiodiversity() {
    return this.biodiversity;
  }

  clearBiodiversity() {
    this.biodiversity = undefined;
  }

  addEnergie(energieEval: EnergieEval) {
    this.energie = energieEval;
  }

  getEnergie() {
    return this.energie;
  }

  clearEnergie() {
    this.energie = undefined;
  }
}

export class BiodiversityEval {

}

export class EnergieEval {
  heizart: HeizartenEnum;
  energieVerbrauchHaupt: number;
  sekundaerEnergie: HeizartenEnum;
  energieVerbrauchSek: number;

  constructor(heizart: HeizartenEnum, energieVerbrauchHaupt: number, sekundaerEnergie: HeizartenEnum, energieVerbrauchSek: number) {
    this.heizart = heizart;
    this.energieVerbrauchHaupt = energieVerbrauchHaupt;
    this.sekundaerEnergie = sekundaerEnergie;
    this.energieVerbrauchSek = energieVerbrauchSek;
  }

}

export enum HeizartenEnum {
  geothermie = 'Geothermie',
  heizoel = 'Heizöl',
  erdgas = 'Erdgas',
  biogas = 'Biogas',
  holzpellets = 'Holzpellets/Schnitzel',
  fernwaerme = 'Fernwärme',
  waermepumpe = 'Wärmepumpe'
}
