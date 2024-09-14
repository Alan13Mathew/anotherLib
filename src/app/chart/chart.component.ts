import { Component} from '@angular/core';
import {NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions
} from 'ng-apexcharts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
   pieChartSeries: ApexNonAxisChartSeries = [30, 55, 13, 43, 22];
   pieChartOptions: ApexChart = {
      type: 'pie',
      height: 350
  };

  public pieChartTitle: ApexTitleSubtitle = {
    text: 'Sample Pie Chart'
  };

  // Bar chart
  public barChartSeries = [
    {
      name: 'Series 1',
      data: [40, 20, 30, 40]
    }
  ];
  public barChartOptions: ApexChart = {
    type: 'bar',
    height: 350
  };
  public barChartXAxis: ApexXAxis = {
    categories: ['a1', 'a2', 'a3', 'a4']
  };
  public barChartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false
    }
  };
  public barChartTitle: ApexTitleSubtitle = {
    text: 'Sample Bar Chart'
  };
}
