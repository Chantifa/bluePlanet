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
import {MobilityComponent} from "../mobility/mobility.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    AppComponent,
    BiodiversityComponent,
    EnergieComponent,
    OverviewComponent,
    LoginComponent,
    MobilityComponent,
    KlimaschuleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    CommonModule, MatGridListModule,
    FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatListModule,
    MatSelectModule, RouterOutlet, MatCheckboxModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
