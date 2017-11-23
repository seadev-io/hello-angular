import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ]
})
export class PagesModule { }
