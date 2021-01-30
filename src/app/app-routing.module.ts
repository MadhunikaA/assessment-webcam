import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import ROUTE_NAMES from './routeNames';

const routes: Routes = [
  { path: ROUTE_NAMES.HOME, component: HomeComponent },
  { path: ROUTE_NAMES.ASSESSMENT, component: AssessmentComponent },
  { path: ROUTE_NAMES.REST, redirectTo: ROUTE_NAMES.HOME }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
