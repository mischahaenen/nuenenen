export interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  created: Date;
  photoUrl?: string;
  tags?: string[];
}
