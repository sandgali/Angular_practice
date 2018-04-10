import{Route, Routes, Router, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { SkillsComponent } from './skills/skills.component';

export const routes:Routes=[{
    path:'home',
    component: HomeComponent
},
    {   
         path:'about',
    component: AboutComponent
    },
    {
        path:'experiance',
        component: ExperianceComponent

    },
       {
        path:'skills',
        component: SkillsComponent
           
}]

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);