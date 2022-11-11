import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ListComponent } from './components/list/list.component';
import { TimerComponent } from './components/timer/timer.component';
import { ListService } from './services/list.service';
import { SubjectService } from './services/subject.service';
import { TimerService } from './services/timer.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectComponent,
    ListComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TimerService, ListService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
