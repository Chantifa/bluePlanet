import {Component} from '@angular/core';
import {MobilityEval, SchoolService} from "../service/school-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mobility',
  templateUrl: './mobility.component.html',
})
export class MobilityComponent {
  hatEBikes: boolean;
  hatEAutos: boolean;
  mobVerhaltenS: string;
  mobVerhaltenL: string;
  abmachungen: string;
  regelFlugreisen: string;
  regelReisen: string;
  weiteres: string;

  constructor(private schoolService: SchoolService, private router: Router) {
    this.hatEBikes = false;
    this.hatEAutos = false;
    this.mobVerhaltenS = "";
    this.mobVerhaltenL = "";
    this.abmachungen = "";
    this.regelFlugreisen = "";
    this.regelReisen = "";
    this.weiteres = "";
  }

  onSubmit() {
    const mobilityEval = new MobilityEval(this.hatEBikes, this.hatEAutos, this.mobVerhaltenS, this.mobVerhaltenL, this.abmachungen, this.regelFlugreisen, this.regelReisen, this.weiteres);
    this.schoolService.addMobility(mobilityEval);
    this.router.navigate(['/overview']);
  }
}
