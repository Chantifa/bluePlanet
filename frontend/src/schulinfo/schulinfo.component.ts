import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SchoolService} from "../service/school-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'schulinfo',
    templateUrl: './schulinfo.component.html',
})
export class SchulinfoComponent {
    schulname = new FormControl<string>('');
    schuladresse = new FormControl<string>('');
    referenzjahr  = new FormControl<number>(0);

    constructor(private schoolservice: SchoolService, private router: Router) {
    }

    setname() {
        this.schoolservice.addSchulename(this.schulname.value);
    }

    setadresse() {
        this.schoolservice.addSchuladresse(this.schuladresse.value);
    }

    setjahr() {
        this.schoolservice.addJahr(this.referenzjahr.value);
    }

    onSave() {
        this.router.navigate(['/overview']);
    }
}
