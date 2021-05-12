export interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  author_image: string;
  created: Date;
  tag: string;
  image?: string;
}
