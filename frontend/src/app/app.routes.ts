import { Routes } from '@angular/router';
import {EnergieComponent} from "../energie/energie.component";
import {BiodiversityComponent} from "../biodiversity/biodiversity.component";
import {OverviewComponent} from "../overview/overview.component";
import {LoginComponent} from "../login/login.component";
import {MobilityComponent} from "../mobility/mobility.component";
import {SchulinfoComponent} from "../schulinfo/schulinfo.component";
import {RankingComponent} from "../ranking/ranking.component";
import {PotentialComponent} from "../potential/potential.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'energie', component: EnergieComponent },
  { path: 'biodiversity', component: BiodiversityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'schulinfo', component: SchulinfoComponent },
  { path: 'mobility', component: MobilityComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'potential', component: PotentialComponent }
];
