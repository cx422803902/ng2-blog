/**
 * Created by chenxing on 2017/7/4.
 */
export class Category {
  private _id: number;
  private _name: string;
  private _count: number;


  constructor(id: number, name: string, count: number) {
    this._id = id;
    this._name = name;
    this._count = count;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }
}
