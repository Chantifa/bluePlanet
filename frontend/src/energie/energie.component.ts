import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'energie',
  standalone: true,
  imports: [CommonModule, MatGridListModule, FormsModule, MatCardModule],
  templateUrl: './energie.component.html',
})
export class EnergieComponent {
}
