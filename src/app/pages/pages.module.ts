import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule
  ],
  exports: [
    ThemeModule
  ],  
  declarations: [
    ...PAGES_COMPONENTS,
    LandingComponent,
  ]
})
export class PagesModule { }
