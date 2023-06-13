import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeachersComponent } from './form-teachers.component';

describe('FormTeachersComponent', () => {
  let component: FormTeachersComponent;
  let fixture: ComponentFixture<FormTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
