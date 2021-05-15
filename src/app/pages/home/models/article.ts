export interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  author_image: string;
  created: Date;
  tag: string;
  image?: string;
}
