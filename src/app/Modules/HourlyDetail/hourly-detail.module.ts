import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HourlyComponent } from '../../Components/HourlyDetail/hourly-detail.component';
import { hourlyDetailRoute } from './hourly-detail.routes';
import { SharedModule } from '../Shared/shared.module';
import { SortTablePipe } from '../../Pipes/sort-table.pipe';

@NgModule({
  declarations: [HourlyComponent, SortTablePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(hourlyDetailRoute),
    FormsModule,
    SharedModule,
  ],
  providers: [],
  exports: [SortTablePipe],
})
export class HourlyDetailModule {}
