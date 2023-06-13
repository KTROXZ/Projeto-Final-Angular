import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Teachers } from '../teachers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-form-teachers',
  templateUrl: './form-teachers.component.html',
  styleUrls: ['./form-teachers.component.css']
})
export class FormTeachersComponent implements OnChanges {
  @Input()
  teacher: Teachers = {} as Teachers;

  @Output()
  saveEvent = new EventEmitter<Teachers>();

  @Output()
  cleanEvent = new EventEmitter<void>();

  formGroupTeacher: FormGroup;

  submitted: boolean = false;

  disciplineOptions: string[] = ['Matemática', 'Português', 'História', 'Geografia', 'Biologia', 'Física', 'Química'];

  constructor(private teacherService: TeachersService, private formBuilder: FormBuilder){
    this.formGroupTeacher = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      discipline: ['', [Validators.required]],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupTeacher.setValue(this.teacher);
  }

  save(){
    this.submitted = true;
    if(this.formGroupTeacher.valid){
      this.saveEvent.emit(this.formGroupTeacher.value);
      this.formGroupTeacher.reset();
      this.submitted = false;
    }
  }

  clean(){
    this.cleanEvent.emit();
    this.formGroupTeacher.reset();
  }

  get name(): any {
    return this.formGroupTeacher.get("name");
  }

  get email(): any {
    return this.formGroupTeacher.get("email");
  }

  get phoneNumber(): any {
    return this.formGroupTeacher.get("phoneNumber");
  }

  get discipline(): any {
    return this.formGroupTeacher.get("discipline");
  }
}
