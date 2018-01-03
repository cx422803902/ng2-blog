import {Tag} from './model.tag';
import {Category} from './model.category';
/**
 * Created by chenxing on 2017/7/4.
 */
export class Summary {
  private _id: number;
  private _title: string;
  private _summary: string;
  private _postDate: Date;
  private _viewCount: number;
  private _categories: Category[];
  private _tags: Tag[];


  constructor(id: number, title: string, summary: string, postDate: Date, viewCount: number, categories: Category[], tags: Tag[]) {
    this._id = id;
    this._title = title;
    this._summary = summary;
    this._postDate = postDate;
    this._viewCount = viewCount;
    this._categories = categories;
    this._tags = tags;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }


  get postDate(): Date {
    return this._postDate;
  }

  set postDate(value: Date) {
    this._postDate = value;
  }


  get viewCount(): number {
    return this._viewCount;
  }

  set viewCount(value: number) {
    this._viewCount = value;
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
}
