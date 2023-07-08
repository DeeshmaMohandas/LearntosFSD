import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {ShorttermCoursesComponent} from './shortterm-courses/shortterm-courses.component';


const routes: Routes = [{path:'Home', component: ShorttermCoursesComponent}, {path:'', redirectTo: 'Home', pathMatch: 'full'}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
