/**
 * Created by chenxing on 2017/7/4.
 */
export class Archive {
  private _date: Date;
  private _count: number;


  constructor(date: Date, count: number) {
    this._date = date;
    this._count = count;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }
}
