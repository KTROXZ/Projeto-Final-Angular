import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Teachers } from '../teachers';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-form-teachers',
  templateUrl: './form-teachers.component.html',
  styleUrls: ['./form-teachers.component.css']
})
export class FormTeachersComponent {
  @Input()
  teacher: Teachers = {} as Teachers;

  @Output()
  saveEvent = new EventEmitter<Teachers>();

  @Output()
  cleanEvent = new EventEmitter<void>();

  formGroupTeacher: FormGroup;

  constructor(private teacherService: TeachersService, private formBuilder: FormBuilder){
    this.formGroupTeacher = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      phoneNumber: [''],
      discipline: [''],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupTeacher.setValue(this.teacher);
  }

  save() {
    if(this.formGroupTeacher.valid){
      this.saveEvent.emit(this.formGroupTeacher.value);
      this.formGroupTeacher.reset();
    }
  }

  clean(){
    this.cleanEvent.emit();
    this.formGroupTeacher.reset();
  }
}
