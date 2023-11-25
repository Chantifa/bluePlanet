import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'overview',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  constructor(private router: Router) {
  }

  navigateToEnergie() {
    this.router.navigate(['/', 'energie']);
  }

  navigateToBiodiversity() {
    this.router.navigate(['/', 'biodiversity']);
  }

}
