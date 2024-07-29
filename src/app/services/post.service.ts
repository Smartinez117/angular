import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostExt } from '../models/post.model';
import { ProductoExt } from '../models/producto.model';

const baseUrl = 'https://dummyjson.com/posts?limit=10';
const baseProductoUrl='https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<PostExt> {
    return this.http.get<PostExt>(baseUrl);
  }
  public getAllProduct(): Observable<ProductoExt> {
    return this.http.get<ProductoExt>(baseProductoUrl);
  }
}
