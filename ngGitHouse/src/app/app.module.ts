import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';

@NgModule({
  declarations: [
    AppComponent,
    GitreposComponent
  ],
  imports: [
      BrowserModule, HttpClientModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
