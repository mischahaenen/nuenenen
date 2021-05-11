import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbteilungComponent } from './abteilung.component';

const routes: Routes = [{ path: '', component: AbteilungComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbteilungRoutingModule {}
