import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IgxCategoryChartComponent,
  IgxDataChartCoreModule,
  IgxDataChartInteractivityModule,
  IgxDataChartScatterCoreModule,
  IgxDataChartScatterModule,
} from 'igniteui-angular-charts';
import { interval, skip } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    IgxDataChartCoreModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartInteractivityModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(IgxCategoryChartComponent)
  private chart: IgxCategoryChartComponent | null = null;

  chartData = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
  ];

  constructor() {
    this.addNewData();
  }

  private addNewData() {
    interval(1000)
      .pipe(skip(2))
      .subscribe((value) => {
        const newChartValue = {
          x: value,
          y: Math.random() * 1000 + 1,
        };
        this.chartData.push(newChartValue);
        this.chart?.notifyInsertItem(
          this.chartData,
          this.chartData.length - 1,
          newChartValue
        );
      });
  }
}
