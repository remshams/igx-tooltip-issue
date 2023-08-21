import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IgxCategoryChartModule,
  IgxDataChartCoreModule,
  IgxDataChartInteractivityModule,
  IgxDataChartScatterCoreModule,
  IgxDataChartScatterModule,
  IgxItemToolTipLayerModule,
} from 'igniteui-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    IgxCategoryChartModule,
    IgxDataChartCoreModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartInteractivityModule,
    IgxItemToolTipLayerModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chartData = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
  ];
}
