import { TestBed } from '@angular/core/testing';

import { ArticleDetailResolver } from './article-detail.resolver';

describe('ArticleDetailResolver', () => {
  let resolver: ArticleDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArticleDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
