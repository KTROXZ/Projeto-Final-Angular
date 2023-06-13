import { Injectable } from '@angular/core';
import { Teachers } from './teachers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  url = 'http://localhost:3007/teachers';
  constructor(private http : HttpClient) { }

  getTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(this.url);
  }

  getClient(id: number): Observable<Teachers>{
    return this.http.get<Teachers>(`${this.url}/${id}`);
  }

  save(teacher: Teachers): Observable<Teachers>{
    return this.http.post<Teachers>(this.url, teacher);
  }

  update(teacher: Teachers): Observable<Teachers>{
    return this.http.put<Teachers>(`${this.url}/${teacher.id}`, teacher);
  }

  delete(teacher: Teachers): Observable<void>{
    return this.http.delete<void>(`${this.url}/${teacher.id}`);
  }
}
