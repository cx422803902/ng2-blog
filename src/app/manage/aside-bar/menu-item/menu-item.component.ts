import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  expand: boolean = false;
  @Input() item: MenuItem;

  @Output() selecteMenu = new EventEmitter<MenuItem>();

  constructor() {
  }

  ngOnInit() {
  }

  doClickItem(currentTarget: any): boolean {
    this.expand = !this.expand;
    let subMenu = jQuery(currentTarget).parent().next();
    if(this.expand) {
      subMenu.slideDown();
    }else {
      subMenu.slideUp();
    }
    console.log('hehe');
    this.selecteMenu.emit(this.item);
    return false;
  }

}
