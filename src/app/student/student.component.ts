import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 19 }
  ];

  // Adicionar um novo aluno à lista
  adicionarAluno(student: any) {
    this.students.push(student);
  }
}
