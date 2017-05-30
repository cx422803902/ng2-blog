import {Component, OnInit} from '@angular/core';
import {GlobalEvent, GlobalState} from '../global.status';
import {UserAuthService} from '../shared/user-auth.service';
@Component({
  selector: 'app-manager-root',
  templateUrl: './manage.component.html',
  styleUrls: [
    './manage.component.less'
  ]
})
export class ManageComponent implements OnInit {
  menu_collapsed: boolean = false;

  constructor(private userAuthService: UserAuthService, private globalState: GlobalState) {
    this.globalState.subscription(GlobalEvent.ADMIN_MENU_COLLAPSE, menu_collpased => this.menu_collapsed = menu_collpased);
  }

  ngOnInit(): void {
    if (!this.userAuthService.doCheckLogin()) {
      this.userAuthService.doNavigateLogin('manage');
    }
  }

}