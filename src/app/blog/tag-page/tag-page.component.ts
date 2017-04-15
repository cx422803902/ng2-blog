import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogSummary} from '../../model/blog-summary.model';
import {BlogTag} from '../../model/blog-tag.model';
import {BlogHttpService} from '../blog.http.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: [
    './tag-page.component.less'
  ]
})
export class TagPageComponent implements OnInit {
  private tags: BlogTag[] = [];
  private summaries: BlogSummary[] = [];
  private tagId: number = undefined;

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadTagPosts(this.route.snapshot.params);
    this.route.params
      .subscribe(params => this.loadTagPosts(params));
  }

  private loadTagPosts(params: Params): void {
    this.tagId = params['tagId'];
    this.blogHttpService
      .loadTags()
      .then(tags => this.tags = tags);
    this.blogHttpService
      .loadBlogSummariesByTag(this.tagId)
      .then(summaries => this.summaries = summaries);
  }

}
