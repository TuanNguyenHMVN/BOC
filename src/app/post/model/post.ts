import { Comment } from './comment';

export class Post {
  id: number;
  body: string;
  comments: Comment[];
}
