import { Component, OnInit, ViewChild } from '@angular/core';

import { PostService } from '../../../services';
import { Post } from '../../model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  postList: Post[];
  isAddPost: boolean;
  postContent: string;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.isAddPost = false;
    this.onGetAllPost();
  }

  onGetAllPost(): void {
    this.postService.getAllPost().subscribe(res => {
      this.postList = res;
    });
  }

  onDeletePost(id: number): void {
    this.postService.deletePost(id).subscribe(res => {
      this.onGetAllPost();
    });
  }

  onAddPost(): void {
    this.isAddPost = true;
  }

  onSavePost(): void {
    const post = {
      id: Math.floor(Math.random() * Math.floor(99)),
      body: this.postContent,
      comments: []
    };
    this.postService.addPost(post).subscribe(res => {
      this.resetForm();
      this.onGetAllPost();
    });
  }

  resetForm(): void {
    this.isAddPost = false;
    this.postContent = '';
  }

}
