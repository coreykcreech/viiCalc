import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDisplayComponent } from './shared/input-display/input-display.component';
import { ResultDisplayComponent } from './shared/result-display/result-display.component';
import { NumPadComponent } from './shared/num-pad/num-pad.component';
import { OperatorsComponent } from './shared/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDisplayComponent,
    ResultDisplayComponent,
    NumPadComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
