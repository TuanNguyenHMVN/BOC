import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { forkJoin } from 'rxjs';

import { Post, Comment } from '../../model';
import { PostService } from '../../../services';
import { DetailComponent } from '../../components';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @ViewChild('DetailComponent') detail: DetailComponent;
  postContent: Post;
  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.onGetPostDetail();
  }

  onGetPostDetail(): void {
    const postId = this.router['navigationId'];
    const postContent$ = this.postService.getPostDetail(postId);
    const postComment$ = this.postService.getPostComment(postId);

    forkJoin([postContent$, postComment$]).subscribe(res => {
      this.postContent = res[0];
      this.postContent.comments = res[1];
    });
  }

  onSaveComment(comment: Comment): void {
    this.postService.addComment(comment).subscribe(res => {
      // Notification service here
      this.detail.resetForm();
    });
  }

  onUpdatePost(post: object): void {
    this.postService.updatePost(post).subscribe(res => {
      // Notification service here
      this.detail.resetForm();
    });
  }
}
