import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BiodiversityComponent} from "../biodiversity/biodiversity.component";
import {EnergieComponent} from "../energie/energie.component";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {OverviewComponent} from "../overview/overview.component";
import {KlimaschuleComponent} from "../common/klimaschule.component";
import {LoginComponent} from "../login/login.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MobilityComponent} from "../mobility/mobility.component";
import {SchulinfoComponent} from "../schulinfo/schulinfo.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {RankingComponent} from "../ranking/ranking.component";
import {PotentialComponent} from "../potential/potential.component";
import {NgChartsModule} from "ng2-charts";

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [
        AppComponent,
        BiodiversityComponent,
        EnergieComponent,
        OverviewComponent,
        LoginComponent,
        MobilityComponent,
        SchulinfoComponent,
        KlimaschuleComponent,
        RankingComponent,
        PotentialComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule, BrowserAnimationsModule,
        CommonModule, MatGridListModule,
        FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatListModule,
        MatSelectModule, RouterOutlet, MatCheckboxModule, MatButtonModule, MatIconModule, MatExpansionModule,
        NgChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
