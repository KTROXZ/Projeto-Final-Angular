import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent  implements OnInit{
  formGroupStudent: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private route: ActivatedRoute, private router: Router){
    this.formGroupStudent = formBuilder.group({
      id: [''],
      ra: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      class: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getStudentById(id);
  }
  getStudentById(id: number) {
    this.studentService.getStudent(id).subscribe({
      next: data => {
        this.formGroupStudent.setValue(data);
        this.isEditing = true;
      }
    })
  }

  save() {
    this.submitted = true;
    if (this.formGroupStudent.valid) {
      if (this.isEditing) {
        this.studentService.update(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
      else {
        this.studentService.save(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['student']);
  }


  get ra(): any {
    return this.formGroupStudent.get("ra");
  }

  get name(): any {
    return this.formGroupStudent.get("name");
  }

  get email(): any {
    return this.formGroupStudent.get("email");
  }

  get phoneNumber(): any {
    return this.formGroupStudent.get("phoneNumber");
  }

  get class(): any {
    return this.formGroupStudent.get("class");
  }


}
