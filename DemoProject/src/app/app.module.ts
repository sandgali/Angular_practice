import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing} from './app.route';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { SkillsComponent } from './skills/skills.component';
import { SamplepipePipe } from './samplepipe.pipe';
import { DeleteduplPipe } from './deletedupl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    HomeComponent,
    AboutComponent,
    ExperianceComponent,
    SkillsComponent,
    SamplepipePipe,
    DeleteduplPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
