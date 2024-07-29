import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
[x: string]: any;

  @Input() viewMode = false;
  @Input() currentElement: Post = new Post();
  
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',);
    this.toastr.error('Modificacion no disponible', 'Error', {positionClass: 'toast-center-center', timeOut: 6000})
  }
}
