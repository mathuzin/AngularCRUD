import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesService } from './services/courses.service';
import { CoursesListComponent } from "./components/courses-list/courses-list.component";
import { CourseResolver } from './guards/course.resolver';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
],
  providers: [
    CoursesService,
    CourseResolver
  ],
  exports: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent
  ]
})
export class CoursesModule { }
