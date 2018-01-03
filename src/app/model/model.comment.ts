/**
 * Created by chenxing on 2017/7/4.
 */
export class Comment {
  private _id: number;
  private _postId: number;
  private _parentId: number;
  private _author: string;
  private _content: string;
  private _createTime: Date;

  constructor(id: number, postId: number, parentId: number, author: string, content: string, createTime: Date) {
    this._id = id;
    this._postId = postId;
    this._parentId = parentId;
    this._author = author;
    this._content = content;
    this._createTime = createTime;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get postId(): number {
    return this._postId;
  }

  set postId(value: number) {
    this._postId = value;
  }

  get parentId(): number {
    return this._parentId;
  }

  set parentId(value: number) {
    this._parentId = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get createTime(): Date {
    return this._createTime;
  }

  set createTime(value: Date) {
    this._createTime = value;
  }
}
