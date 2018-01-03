import {Injectable} from '@angular/core';
/**
 * Created by chenxing on 2017/7/6.
 */


@Injectable()
export class ConstantService {
  private _SUMMARY_FOR_CATEGORY = 'c';
  private _SUMMARY_FOR_TAG = 't';
  private _SUMMARY_FOR_ARCHIVE = 'a';


  get SUMMARY_FOR_CATEGORY(): string {
    return this._SUMMARY_FOR_CATEGORY;
  }

  get SUMMARY_FOR_TAG(): string {
    return this._SUMMARY_FOR_TAG;
  }

  get SUMMARY_FOR_ARCHIVE(): string {
    return this._SUMMARY_FOR_ARCHIVE;
  }
}
