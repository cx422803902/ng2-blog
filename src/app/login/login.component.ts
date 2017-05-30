import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserAuthService} from '../shared/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit() {
    let user: User = this.userAuthService.getUser();
    if (user != null) {
      this.userName = user.userName;
      this.password = user.password;
    }
  }

  doLogin(): void {
    this.userAuthService.doLogin(this.userName, this.password)
      .then(user => this.userAuthService.doAfterNavigateLogin());
  }

}
