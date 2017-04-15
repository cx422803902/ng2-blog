import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.less']
})
export class BlogSummaryComponent implements OnInit {
  @Input() postId: number;
  @Input() title: string;
  @Input() info: string;
  @Input() infoImg: string;
  @Input() tags: string[];
  @Input() postDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
