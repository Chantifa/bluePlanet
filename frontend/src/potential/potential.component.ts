import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from "chart.js";
import {SchoolService} from "../service/school-service.service";
import defaultCallbacks from "chart.js/dist/plugins/plugin.tooltip";

@Component({
    selector: 'potential',
    templateUrl: './potential.component.html'
})
export class PotentialComponent {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    constructor(public schoolService: SchoolService) {
    }

    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
            x: {},
            y: {
                min: 10,
            },
        },
        plugins: {
            legend: {
                display: true,
            }
        },
    };
    public barChartType: ChartType = 'bar';

    public barChartData: ChartData<'bar'> = {
        labels: ['Energieverbrauch und Potential'],
        datasets: [
            { data: [this.getEnergie()], label: 'Energieverbrauch total Schule'},
            { data: [ 9822 ], label: 'Energieverbraucht Durchschnitt Deutschland'},
            { data: [ +this.getEnergie() - +9822 ], label: 'Potential'},
        ],
    };

    // events
    public chartClicked({
                            event,
                            active,
                        }: {
        event?: ChartEvent;
        active?: object[];
    }): void {
        console.log(event, active);
    }

    public chartHovered({
                            event,
                            active,
                        }: {
        event?: ChartEvent;
        active?: object[];
    }): void {
        console.log(event, active);
    }

    getEnergie(): number {
        return +(this.schoolService.getEnergie()?.energieVerbrauchHaupt || 0 ) + +(this.schoolService.getEnergie()?.energieVerbrauchSek || 0) as number;
    }
}


