import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../services';

@Injectable()
export class PostService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) {
    this.baseUrl = this.baseService.baseUrl;
  }


  getAllPost(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/posts');
  }

  getPostDetail(postId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/posts/${postId}`);
  }

  getPostComment(postId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/comments?postId=${postId}`);
  }

  addComment(comment): Observable<any> {
    return this.http.post<any>(this.baseUrl + `/comments`, comment);
  }

  addPost(post): Observable<any> {
    return this.http.post<any>(this.baseUrl + `/posts`, post);
  }

  updatePost(post): Observable<any> {
    return this.http.put<any>(this.baseUrl + `/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/posts/${id}`);
  }
}
