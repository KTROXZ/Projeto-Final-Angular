import { Component, OnInit } from '@angular/core';
import { Teachers } from '../teachers';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit{
  teacher: Teachers[] = [];
  teachers: Teachers = {} as Teachers;
  isEditing: boolean = false;

  constructor(private teacherService: TeachersService){

  }
  ngOnInit(): void {
    this.loadTeachers();
  }
  loadTeachers() {
    this.teacherService.getTeachers().subscribe({
      next: (data) => (this.teacher = data),
    });
  }

  onCleanEvent() {
    this.isEditing = false;
  }

  onSaveEvent(teacher: Teachers) {
    if (this.isEditing) {
      this.teacherService.update(teacher).subscribe({
        next: () => {
          this.loadTeachers();
          this.isEditing = true;
        }
      });
    }
    else {
      this.teacherService.save(teacher).subscribe({
        next: data => {
          this.teacher.push(data)
        }
       });
    }
  }

  update(teacher: Teachers) {
    this.teachers = teacher;
    this.isEditing = true;
  }

  delete(teacher: Teachers) {
    this.teacherService.delete(teacher).subscribe({
      next: () => this.loadTeachers(),
    });
  }
}
