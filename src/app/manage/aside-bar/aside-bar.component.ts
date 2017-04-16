import {Component, OnInit} from '@angular/core';
import {GlobalEvent, GlobalState} from '../../global.status';
import {MenuItem} from './menu-item/menu-item.model';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.less']
})
export class AsideBarComponent implements OnInit {
  private menu_collapsed: boolean = false;
  private items: MenuItem[] = [
    {name: 'manage', title: 'Manager', icon: 'ion-android-home', url: '/manage'},
    {name: 'post', title: 'Post', icon: 'ion-edit',
      children: [
        {name: 'editor', title: 'editor', url:'/manage/editor'}
      ]
    }
  ];

  constructor(private globalState: GlobalState) {
    this.globalState.subscription(GlobalEvent.ADMIN_MENU_COLLAPSE, menu_collapsed => this.menu_collapsed = menu_collapsed);
  }

  ngOnInit() {
  }

  doSelectMenu(item: MenuItem): void{
    console.log('hehehe');
    this.items.forEach(it => {
      it.selected = false;
      if(it.children) {
        it.children.forEach(child => child.selected = false);
      }
    });
    item.selected = true;
    console.log('this is ' + item.title);
  }
}
