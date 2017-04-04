import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-blog-remark',
  templateUrl: './blog-remark.component.html',
  styleUrls: ['./blog-remark.component.less']
})
export class BlogRemarkComponent implements OnInit {
  @Input() postId: number;
  @Input() title: string;
  @Input() info: string;
  @Input() infoImg: string;
  @Input() tags: string[];
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

}
