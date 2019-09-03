import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/core/modules/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, LoginComponent],
  providers: []
})
export class SharedModule {}
