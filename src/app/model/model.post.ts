import {Category} from './model.category';
import {Tag} from 'app/model/model.tag';
/**
 * Created by chenxing on 2017/7/4.
 */
export class Post {
  private _id: number;
  private _title: string;
  private _content: string;
  private _postDate: Date;
  private _categories: Category[];
  private _tags: Tag[];

  constructor(id: number, title: string, content: string, postDate: Date, categories: Category[], tags: Tag[]) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._postDate = postDate;
    this._categories = categories;
    this._tags = tags;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get postDate(): Date {
    return this._postDate;
  }

  set postDate(value: Date) {
    this._postDate = value;
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
