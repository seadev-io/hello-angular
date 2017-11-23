import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  HeaderComponent,
} from './components';


const COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [ ...COMPONENTS, MDBBootstrapModule ],  
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ThemeModule { }
