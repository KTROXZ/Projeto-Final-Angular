import { Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router : Router){}

  ngOnInit(): void {
    this.loadStudent();
  }
  loadStudent() {
    this.studentService.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  create(){
    this.router.navigate(['createStudent']);
  }

  edit(student: Student) {
    this.router.navigate(['studentDetails', student.id]);
  }

  delete(student: Student) {
    this.studentService.delete(student).subscribe({
      next: () => this.loadStudent()
    })
  }
}
