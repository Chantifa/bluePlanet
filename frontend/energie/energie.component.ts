import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'energie',
  standalone: true,
  imports: [CommonModule, MatGridListModule, FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatListModule, MatSelectModule],
  templateUrl: './energie.component.html',
})
export class EnergieComponent {
  heizart = new FormControl('');

}
