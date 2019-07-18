import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomeseguroPipe } from './pipes/domeseguro.pipe';
import { ActivarPipe } from './pipes/activar.pipe';


registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent, CapitalizadoPipe, DomeseguroPipe, ActivarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
