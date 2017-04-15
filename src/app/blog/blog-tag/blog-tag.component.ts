import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-tag',
  templateUrl: './blog-tag.component.html',
  styleUrls: ['./blog-tag.component.less']
})
export class BlogTagComponent implements OnInit {
  @Input() tagLink: string;
  @Input() tagContent: string;
  @Input() tagCount: number;
  @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
