import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'biodiversity',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './biodiversity.component.html',
})
export class BiodiversityComponent {
}
