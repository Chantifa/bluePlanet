import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SchoolService {
    schulename: string | null = '';
    schuleadresse: string | null = '';
    biodiversity: BiodiversityEval | undefined;
    energie: EnergieEval | undefined;
    mobility: MobilityEval | undefined;

    /* . . . */
    referenzjahr: number | null = 0;

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

    addMobility(mobilityEval: MobilityEval) {
        this.mobility = mobilityEval;
    }

    getMobility() {
        return this.mobility
    }

    clearMobility() {
        this.mobility = undefined;
    }

    addSchulename(value: string | null) {
        this.schulename = value;
    }

    addSchuladresse(value: string | null) {
        this.schuleadresse = value;
    }

    addJahr(value: number | null) {
      this.referenzjahr = value;
    }

    getSchulname() {
        return this.schulename;
    }

    getJahr() {
        return this.referenzjahr;
    }
}

export class BiodiversityEval {
    hatGarten: boolean;
    hatKompost: boolean;
    weiteres: string;

    constructor(hatGarten: boolean, hatKompost: boolean, weiteres: string) {
        this.hatGarten = hatGarten;
        this.hatKompost = hatKompost;
        this.weiteres = weiteres;
    }
}

export class MobilityEval {
    hatEBikes: boolean;
    hatEAutos: boolean;
    mobVerhaltenS: string;
    mobVerhaltenL: string;
    abmachungen: string;
    regelFlugreisen: string;
    regelReisen: string;
    weiteres: string;

    constructor(hatEBikes: boolean, hatEAutos: boolean, mobVerhaltenS: string, mobVerhaltenL: string, abmachungen: string, regelFlugreisen: string, regelReisen: string, weiteres: string) {
        this.hatEBikes = hatEBikes;
        this.hatEAutos = hatEAutos;
        this.mobVerhaltenS = mobVerhaltenS;
        this.mobVerhaltenL = mobVerhaltenL;
        this.abmachungen = abmachungen;
        this.regelFlugreisen = regelFlugreisen;
        this.regelReisen = regelReisen;
        this.weiteres = weiteres;
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
