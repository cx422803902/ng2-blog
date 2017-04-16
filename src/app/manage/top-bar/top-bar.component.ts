import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEvent, GlobalState} from '../../global.status';
import {UserAuthService} from '../../shared/user-auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {
  private menu_collapsed: boolean = false;

  constructor(private globalState: GlobalState, private userAuthService: UserAuthService, private router: Router) {
  }

  ngOnInit() {
  }

  getUserAuthService(): UserAuthService {
    return this.userAuthService;
  }

  doFlipMenuCollapsed(): boolean {
    this.menu_collapsed = !this.menu_collapsed;
    this.globalState.notify(GlobalEvent.ADMIN_MENU_COLLAPSE, this.menu_collapsed);
    return false;
  }

  doLogout(): boolean {
    this.userAuthService.doLogout();
    this.router.navigateByUrl('');
    return false;
  }

}
