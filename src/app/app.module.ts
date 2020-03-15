import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodigosComponent } from './inicio/codigos/codigos.component';
import { CopiarPegarComponent } from './inicio/copiar-pegar/copiar-pegar.component';
import { LoginCompletoComponent } from './inicio/login-completo/login-completo.component';
import { BarraMenuComponent } from './inicio/barra-menu/barra-menu.component';
import { PalafireComponent } from './palafire/palafire.component';

@NgModule({
  declarations: [
    AppComponent,
    CodigosComponent,
    CopiarPegarComponent,
    LoginCompletoComponent,
    BarraMenuComponent,
    PalafireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
