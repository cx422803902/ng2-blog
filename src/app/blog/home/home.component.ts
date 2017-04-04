import {Component, OnInit} from "@angular/core";
import {BlogHttpSerivice} from "../../service/blog.http.service";
import {BlogTag} from "../model/blog-tag.model";
import {BlogRemark} from "../model/blog-remark.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  private blogTags: BlogTag[] = [];
  private blogRemarks: BlogRemark[] = [];

  constructor(protected blogHttpService: BlogHttpSerivice) {
    console.log('start get data!');
  }
  ngOnInit() {
    this.blogHttpService
      .getTags()
      .then(tags => this.blogTags = tags)
      .catch(reason => console.log('failed to load blog tags because of ' + reason));
    this.blogHttpService
      .getBlogRemarks()
      .then(remarks => this.blogRemarks = remarks)
      .catch(reason => console.log('failed to load blog remarks because of ' + reason));
  }
}

@Component({
  selector: 'app-tag-posts',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class TagPostsComponent implements OnInit {
  private blogTags: BlogTag[] = [];
  private blogRemarks: BlogRemark[] = [];
  private selectedTagId: number = undefined;

  constructor(private route: ActivatedRoute, private blogHttpService: BlogHttpSerivice) {
    this.loadTagPosts(this.route.snapshot.params);
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.loadTagPosts(params);
      });
    console.log('hehe');
  }

  private loadTagPosts(params: Params): void {
    this.selectedTagId = params['tagId']
    this.blogHttpService
      .getTags()
      .then(tags => this.blogTags = tags);
    this.blogHttpService
      .getBlogRemarksByTag(params['tagId'])
      .then(remarks => this.blogRemarks = remarks);
    console.log('start load data');
  }


}