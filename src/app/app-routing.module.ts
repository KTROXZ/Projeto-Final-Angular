import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentComponent } from './student/student.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'student-form', component: FormStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }