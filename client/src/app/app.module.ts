import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module'
import { HttpClientModule } from '@angular/common/http'
import { HttpModule, RequestOptions } from '@angular/http';
import { CustomRequestOptions } from './customrequest.options'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    HttpClientModule,
  ],
  providers: [  { provide: RequestOptions, useClass: CustomRequestOptions } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
