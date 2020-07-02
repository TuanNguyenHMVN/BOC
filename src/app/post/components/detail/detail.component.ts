import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Comment } from '../../model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() postContent: Post;
  @Output() saveComment = new EventEmitter<Comment>();
  @Output() updatePost = new EventEmitter<object>();

  isAddComment: boolean;
  isEditPost: boolean;
  newComment = new Comment();
  constructor() {}

  ngOnInit(): void {
    this.newComment.body = '';
    this.isAddComment = false;
    this.isEditPost = false;
  }

  onWriteComment(): void {
    this.isAddComment = true;
    this.newComment.body = '';
  }

  onEditPost(): void {
    this.isEditPost = true;
  }

  onSave(): void {
    if (this.isEditPost) {
      this.onSavePost();
    } else {
      this.onSaveComment();
    }
  }

  onSavePost(): void {
    if (this.postContent.body) {
      const data = {
        id: this.postContent.id,
        body: this.postContent.body,
      };
      this.updatePost.emit(data);
    }
  }

  onSaveComment(): void {
    if (this.newComment && this.newComment.body) {
      this.newComment.postId = this.postContent.id;
      this.saveComment.emit(this.newComment);
      this.postContent.comments.push(this.newComment);
    }
  }

  resetForm(): void {
    this.isAddComment = false;
    this.isEditPost = false;
  }

}
