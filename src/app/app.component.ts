import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('primaryContainer')
  private _primaryContainer: ElementRef;
  private hideBtn: boolean;
  constructor() {}

  backToTop(): boolean {
    this.primaryContainer.nativeElement.scrollTop = 0;
    return false;
  }

  get primaryContainer(): ElementRef {
    return this._primaryContainer;
  }

  set primaryContainer(value: ElementRef) {
    this._primaryContainer = value;
  }
}
