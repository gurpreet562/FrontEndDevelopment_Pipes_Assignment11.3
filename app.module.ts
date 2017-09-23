import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import {CapitalizeFirstPipe} from './capitalizefirst.pipe';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
 
@NgModule({
  declarations: [
    AppComponent,CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }