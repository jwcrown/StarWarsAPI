import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { StarcomponentComponent } from './starcomponent/starcomponent.component';
import { MainService } from './main.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    StarcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
