import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EnergieEval, HeizartenEnum, SchoolService} from "../service/school-service.service";
import {KeyValue} from "@angular/common";
import {P} from "@angular/cdk/keycodes";

@Component({
    selector: 'energie',
    templateUrl: './energie.component.html',
})
export class EnergieComponent {
    heizart: HeizartenEnum | null = null;
    energieVerbrauchHaupt = new FormControl<number>(0);
    sekundaerEnergie: HeizartenEnum | null = null;
    energieVerbrauchSek = new FormControl<number>(0);

    constructor(private schoolservice: SchoolService) {
    }

    onSubmit() {
        const energieEval = new EnergieEval(this.heizart, this.energieVerbrauchHaupt.value, this.sekundaerEnergie, this.energieVerbrauchSek.value);
        this.schoolservice.addEnergie(energieEval);
    }

  setValue(heizartenEnum: HeizartenEnum) {
      this.heizart = heizartenEnum;
    }

  setValueSek(heizartenEnum: HeizartenEnum) {
    this.sekundaerEnergie = heizartenEnum;
  }

    protected readonly HeizartenEnum = HeizartenEnum;
}
