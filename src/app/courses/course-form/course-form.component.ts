import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
  standalone: false
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
      ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', {nonNullable: true}),
      category: ['']
    });
   }

   onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onErorr());
   }
   onCancel() {
    this.location.back();
   }

   private onSuccess() {
      this.snackBar.open('Curso Salvo com sucesso', '', {duration: 5000});
      this.onCancel();
   }

   private onErorr() {
      this.snackBar.open('Erro ao salvar curso.', '', {duration: 5000});
   }

}
