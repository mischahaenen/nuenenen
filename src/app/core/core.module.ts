import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
