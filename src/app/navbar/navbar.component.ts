import { Component, OnInit } from '@angular/core';
import {Category} from '../model/model.category';
import {Archive} from '../model/model.archive';
import {DatasourceService} from '../service/DatasourceService';
import {Tag} from '../model/model.tag';
import {ConstantService} from '../service/ConstantService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _categories: Category[] = [];
  private _tags: Tag[] = [];
  private _archives: Archive[] = [];

  constructor(private datasoruceService: DatasourceService, public constService: ConstantService) { }

  ngOnInit() {
    this.datasoruceService
      .loadAllCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
    this.datasoruceService
      .loadAllTags()
      .subscribe(tags => this.tags = tags);
    this.datasoruceService
      .loadAllArchives()
      .subscribe(archives => this.archives = archives);
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }

  get archives(): Archive[] {
    return this._archives;
  }

  set archives(value: Archive[]) {
    this._archives = value;
  }
}
