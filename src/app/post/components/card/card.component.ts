import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
  }

  onDeletePost(): void {
    this.deletePost.emit(this.post.id);
  }

}
