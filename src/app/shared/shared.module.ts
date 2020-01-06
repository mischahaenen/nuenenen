import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/core/modules/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
