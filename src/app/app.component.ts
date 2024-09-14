import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NgbCarouselModule,ScatterChartComponent,ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginUsingBootstrap';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
