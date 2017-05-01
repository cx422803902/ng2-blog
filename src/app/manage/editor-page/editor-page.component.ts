import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.less']
})
export class EditorPageComponent implements OnInit, AfterViewInit, OnDestroy{

  private editor: any;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    tinymce.init({
      selector: '#post-editor',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      skin_url: '/assets/tinymce/skins/lightgray',
      codesample_content_css:'/assets/other/prism.css',
      language_url: '/assets/tinymce/langs/zh_CN.js',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          //console.log('triggler key up, content is ' + editor.getContent());
        })
      }
    });
  }

  onSubmitContent(parent): boolean {
    var $parent = $(parent);
    var formData = $parent.serializeArray();
    var content = this.editor.getContent();
    formData.push({
      name: 'content',
      value: content
    });
    console.log('arr is :');
    console.log(formData);
    return false;
  }


  ngOnDestroy(): void {
    tinymce.remove(this.editor);
  }
}
