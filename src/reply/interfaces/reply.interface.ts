export interface IComment{
  id: string;
  created_at: Date;
  comment_id: string;
  message: string;
  username: string;
  likes: number;
}