import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

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
    hatGarten: boolean;
    hatKompost: boolean;

    constructor(hatGarten: boolean, hatKompost: boolean) {
        this.hatGarten = hatGarten;
        this.hatKompost = hatKompost;
    }
}

export class EnergieEval {
    heizart: HeizartenEnum | null;
    energieVerbrauchHaupt: number | null;
    sekundaerEnergie: HeizartenEnum | null;
    energieVerbrauchSek: number | null;

    constructor(heizart: HeizartenEnum | null, energieVerbrauchHaupt: number | null, sekundaerEnergie: HeizartenEnum | null, energieVerbrauchSek: number | null) {
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
    waermepumpe = 'Wärmepumpe',
}
