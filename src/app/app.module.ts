import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './view/date/date.component';
import { ExibirComponent } from './view/exibir/exibir.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ExibirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
