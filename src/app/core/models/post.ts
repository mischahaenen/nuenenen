class Post {
  id: number;
  title: string;
  description: string;
  author: string;
  created: Date;
  photoUrl?: string;
  tags?: string[];

  constructor(initializer?: Partial<Post>) {
    Object.assign(this, initializer);
  }
}
