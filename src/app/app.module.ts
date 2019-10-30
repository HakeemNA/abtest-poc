import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AbTestsModule } from './modules/angular-ab-tests/module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AbTestsModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
