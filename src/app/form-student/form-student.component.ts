import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {
  student = { nome: '', idade: 0 };

  constructor(private router: Router, private studentComponent: StudentComponent) {}

  cadastrarAluno() {
    // Lógica para cadastrar o aluno
    // Aqui você pode adicionar o código para enviar os dados do aluno para um serviço ou API
    // Por enquanto, apenas exibiremos os dados no console
    this.studentComponent.adicionarAluno(this.student);

    // Redirecionar para a lista de alunos
    this.router.navigate(['/student']);
  }
}
