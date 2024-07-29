import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-cursoform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursoform.component.html',
  styleUrl: './cursoform.component.css'
})
export class CursoformComponent {

  NewCurso: Curso = new Curso();

  OnSave() {
    console.log(this.NewCurso);
  }
}
