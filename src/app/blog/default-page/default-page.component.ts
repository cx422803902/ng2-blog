import {Component, OnInit} from '@angular/core';
import {BlogSummary} from '../../model/blog-summary.model';
import {BlogTag} from '../../model/blog-tag.model';
import {BlogHttpService} from '../blog.http.service';

@Component({
  selector: 'app-default-page',
  templateUrl: '../tag-page/tag-page.component.html',
  styleUrls: [
    '../tag-page/tag-page.component.less'
  ]
})
export class DefaultPageComponent implements OnInit {
  private tags: BlogTag[] = [];
  private summaries: BlogSummary[] = [];

  constructor(private blogHttpService: BlogHttpService) {
  }

  ngOnInit() {
    this.blogHttpService
      .loadTags()
      .then(tags => this.tags = tags)
      .catch(reason => console.log('failed to load blog tags because of ' + reason));
    this.blogHttpService
      .loadBlogSummaries()
      .then(summaries => this.summaries = summaries)
      .catch(reason => console.log('failed to load blog summaries because of ' + reason));
  }


}
