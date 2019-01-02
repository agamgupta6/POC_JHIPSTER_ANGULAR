import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternaluiRoutingModule } from './externalui-routing.module';
import { ComoComponent } from './como/como.component';
import { UserRouteAccessService } from 'app/core';

@NgModule({
  declarations: [ComoComponent],
  imports: [
    CommonModule,
    ExternaluiRoutingModule
  ],
  providers: [UserRouteAccessService]
})
export class ExternaluiModule { }
