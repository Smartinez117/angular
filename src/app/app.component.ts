import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CursoformComponent } from './components/cursoform/cursoform.component';
import { PostListComponent } from "./components/post-list/post-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, CursoformComponent, PostListComponent]
})
export class AppComponent {


  data = {
    titulo: 'Demo DSW',
    description: 'Demo Desarrollo de Software',
    List_caption: 'Posts',
    Add_caption: 'Agregar',
    Search_caption: 'Buscar'
  }

}
