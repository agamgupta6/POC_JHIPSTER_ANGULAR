import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComoComponent } from './como/como.component';
import { UserRouteAccessService } from 'app/core';
import { comoRoute } from './como/como.route';
const externalChildren = [comoRoute];

const routes: Routes = [
  {
    path : 'external',
    data: {
      authorities: ['ROLE_ADMIN']
  },
  canActivate: [UserRouteAccessService],
  children: externalChildren
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternaluiRoutingModule { }
