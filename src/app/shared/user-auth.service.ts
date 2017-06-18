import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as STORAGE_LOCAL_KEY from '../config/storage.local.key';
import * as STORAGE_SESSION_KEY from '../config/storage.session.key';
import {URLS} from '../config/web-api.config';
import {User, UserStatus} from '../model/user.model';

@Injectable()
export class UserAuthService {
  private static instance: UserAuthService;

  private user: User;

  private constructor(private http: Http, private router: Router) {
    let jsonUser: string = localStorage.getItem(STORAGE_LOCAL_KEY.CURRENT_USER_KEY);
    if (jsonUser != undefined) {
      this.user = JSON.parse(jsonUser);
      this.user.status = UserStatus.LOGOUT;
    }
    if (this.user != undefined && this.user.rememberMe) {
      this.doLogin(this.user.userName, this.user.password);
    }
  }

  doNavigateLogin(lastUrl: string): void {
    if (lastUrl) {
      sessionStorage.setItem(STORAGE_SESSION_KEY.URL_BEFORE_LOGIN, lastUrl);
    } else {
      sessionStorage.removeItem(STORAGE_SESSION_KEY.URL_BEFORE_LOGIN);
    }
    this.router.navigateByUrl('login');
  }

  doAfterNavigateLogin(): void {
    let redirectTo: string = sessionStorage.getItem(STORAGE_SESSION_KEY.URL_BEFORE_LOGIN);
    if (!redirectTo) {
      redirectTo = 'manage';
    }
    this.router.navigateByUrl(redirectTo);
  }

  doLogin(userName: string, password: string): Promise<User> {
    return this.login(userName, password)
      .then(user => {
        if (user != null) {
          let currentUser: User = {
            id: user.id,
            userName: user.userName,
            nickName: user.nickName,
            password: password,
            rememberMe: user.rememberMe,
            email: user.email,
            telephone: user.telephone,
            status: UserStatus.LOGIN
          };
          this.updateUser(currentUser);
          return currentUser;
        }
        return null;
      });
  }

  doForget(): void {
    if (this.user != undefined) {
      console.log('htht');
      this.user.rememberMe = false;
      this.updateUser(this.user);
    }
  }

  doLogout(): void {
    if (this.user != undefined) {
      this.logout(this.user.userName)
        .then(success => {
          this.user.status = UserStatus.LOGOUT;
          this.updateUser(this.user);
          this.doForget();
        });
    }
  }

  doCheckLogin(): boolean {
    console.log('hehehehehe');
    console.log(this.user);
    return this.user != undefined && this.user.status == UserStatus.LOGIN;
  }

  login(userName: string, password: string): Promise<User> {
    let body: any = {
      userName: userName,
      password: password
    };
    return this.http
      .post(URLS.login, body)
      .map(response => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .toPromise();
  }

  logout(userName: string): Promise<boolean> {
    let body : any = {
      userName: userName
    };
    return this.http
      .post(URLS.logout, body)
      .map(response => {
        if (response.ok) {
          return response.json();
        }
        return false;
      })
      .toPromise();
  }

  getUser(): User {
    return this.user;
  }

  private updateUser(user: User): void {
    console.log(user);
    this.user = user;
    localStorage.setItem(STORAGE_LOCAL_KEY.CURRENT_USER_KEY, JSON.stringify(this.user));
  }


  static getSingleton(http: Http, router: Router): UserAuthService {
    if (UserAuthService.instance == null) {
      UserAuthService.instance = new UserAuthService(http, router);
    }
    return UserAuthService.instance;
  }
}
