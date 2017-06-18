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
  tags: BlogTag[] = [];
  summaries: BlogSummary[] = [];
  selectedTagId: number = undefined;

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadTagPosts(this.route.snapshot.params);
    this.route.params
      .subscribe(params => this.loadTagPosts(params));
  }

  private loadTagPosts(params: Params): void {
    this.selectedTagId = params['id'];
    this.blogHttpService
      .loadTags()
      .then(tags => this.tags = tags)
      .then(() =>
        this.blogHttpService
        .loadBlogSummariesByTag(this.selectedTagId)
        .then(summaries => this.summaries = summaries));

  }

}
