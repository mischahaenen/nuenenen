class Article {
  id: number;
  title: string;
  description: string;
  author: string;
  created: Date;
  photoUrl?: string;
  tags?: string[];

  constructor(initializer?: Partial<Article>) {
    Object.assign(this, initializer);
  }
}
