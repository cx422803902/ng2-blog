import {Component} from '@angular/core';
import {UserAuthService} from '../shared/user-auth.service';
@Component({
  selector: 'app-blog-root',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.less'
  ]
})
export class BlogComponent {
  constructor(private userAuthService: UserAuthService) {
  }

  getUserAuthService(): UserAuthService {
    return this.userAuthService;
  }
}