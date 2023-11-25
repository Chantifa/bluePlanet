import {Component} from '@angular/core';
import {BiodiversityEval, SchoolService} from "../service/school-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'biodiversity',
  templateUrl: './biodiversity.component.html',
})
export class BiodiversityComponent {
  hatGarten: boolean;
  hatKompost: boolean;
  weiteres: string;

  constructor(private schoolService: SchoolService, private router: Router) {
    this.hatGarten = false;
    this.hatKompost = false;
    this.weiteres = "";
  }

  onSubmit() {
    const biodiversityEval = new BiodiversityEval(this.hatGarten, this.hatKompost, this.weiteres);
    this.schoolService.addBiodiversity(biodiversityEval);
    this.router.navigate(['/overview']);
  }
}
