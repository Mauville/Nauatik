import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  // TODO Remove dummy data. This is from the docs
  public lineChartData: ChartDataSets[] = [
    {data: [62, 73, 57, 116, 91, 106, 23], label: 'Plasticos'},
    {data: [15, 57, 40, 35, 101, 6, 108], label: 'Sanitarios'},
    {data: [162, 513, 677, 106, 927, 319, 261], label: 'Alimentos', yAxisID: 'y-axis-1'}
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Plastico', 'Papel', 'Vidrio', 'Alimentos', 'Latas', 'Sanitarios'];
  public polarAreaChartData: SingleDataSet = [320, 415, 67, 60, 61, 69];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';
  private pluginAnnotations = '';
  public lineChartPlugins = [this.pluginAnnotations];

  constructor() {
  }

  ngOnInit(): void {
  }

}
