import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:3007/student'
  constructor(private http : HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  save(student: Student): Observable<Student>{
    return this.http.post<Student>(this.url, student);
  }

  update(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.url}/${student.id}`, student);
  }

  delete(student: Student): Observable<void>{
    return this.http.delete<void>(`${this.url}/${student.id}`);
  }
}
