import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbteilungComponent } from './abteilung.component';
import { AbteilungRoutingModule } from './abteilung-routing.module';

@NgModule({
  declarations: [AbteilungComponent],
  imports: [CommonModule, AbteilungRoutingModule],
})
export class AbteilungModule {}
