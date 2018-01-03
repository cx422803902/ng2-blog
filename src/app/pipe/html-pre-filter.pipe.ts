import {Pipe, PipeTransform} from '@angular/core';
/**
 * Created by chenxing on 2017/7/23.
 */

@Pipe({
  name : 'htmlPreFilter'
})
export class HtmlPreFilterPipe implements PipeTransform {
  private static RX_HTML_TAG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;

  transform(value: any, ...args): any {
    if (value === null || value === undefined) {
      return value;
    }
    return value.replace(HtmlPreFilterPipe.RX_HTML_TAG, '<$1></$2>');
  }
}
