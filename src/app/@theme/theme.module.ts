import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ],  
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ThemeModule { }
