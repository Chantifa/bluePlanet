import { Routes } from '@angular/router';
import {EnergieComponent} from "../energie/energie.component";
import {BiodiversityComponent} from "../biodiversity/biodiversity.component";
import {OverviewComponent} from "../overview/overview.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'energie', component: EnergieComponent },
  { path: 'biodiversity', component: BiodiversityComponent }
];
