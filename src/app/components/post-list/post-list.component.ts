import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { Producto } from '../../models/producto.model';

@Component({
    selector: 'app-post-list',
    standalone: true,
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css',
    imports: [CommonModule, PostDetailComponent]
})
export class PostListComponent implements OnInit {

  posts?:Post[];
  currentElement: Post = new Post();
  productos?:Producto[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.retrieveProducto();
  }

  retrievePosts(): void {
    this.postService.getAll()
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
          //console.log(this.posts[0].reactions?.likes);
          //console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  setActiveElement(element: Post): void {
    this.currentElement = element;
  }
  retrieveProducto(): void {
    this.postService.getAllProduct()
      .subscribe({
        next: (data) => {
          this.productos = data.products;
          console.log(this.productos);
          //console.log(this.posts[0].reactions?.likes);
          //console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
}
