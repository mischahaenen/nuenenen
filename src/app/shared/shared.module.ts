import { NgModule } from '@angular/core';
import { MaterialModule } from 'app/core/modules/material.module';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe],
  imports: [CommonModule, MaterialModule],
  exports: [TimeAgoPipe]
})
export class SharedModule {}
