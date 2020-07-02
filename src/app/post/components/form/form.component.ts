import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() postContent: Post;
  constructor() {}

  ngOnInit(): void {
  }

}
