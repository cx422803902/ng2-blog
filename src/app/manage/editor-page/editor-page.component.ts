import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BlogHttpService} from '../../blog/blog.http.service';
import {BlogDetail} from '../../model/blog-detail.model';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.less']
})
export class EditorPageComponent implements OnInit, AfterViewInit, OnDestroy {

  private editor: any;

  constructor(private httpService: BlogHttpService) {
  }

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
      codesample_content_css: '/assets/other/prism.css',
      language_url: '/assets/tinymce/langs/zh_CN.js',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          //console.log('triggler key up, content is ' + editor.getContent());
        });
      }
    });
  }

  onSubmitContent(parent): boolean {
    var $parent = $(parent);
    var formData = $parent.serializeArray();
    var content = this.editor.getContent();
    console.log('form data start');
    console.log(formData);
    console.log('form data end');
    formData.push({
      name: 'content',
      value: content
    });
    let blogDetail: BlogDetail = {
      id: undefined,
      title: null,
      info: null,
      infoImg: null,
      content: null,
      tags: [],
    };
    formData.forEach(formItem => {
      if(formItem.name == 'title') {
        blogDetail.title = formItem.value;
        blogDetail.infoImg = formItem.value;
      }else if(formItem.name == 'content') {
        blogDetail.content = formItem.value;
      }
    });
    this.httpService
      .commitBlogPost(blogDetail)
      .then(response => {
        if(response.ok) {
          alert('commit post success!')
        }else {
          console.log('commit post failed with status ' +response.statusText)
        }
      })
      .catch(message => console.log('commit post failed cause of ' + message));
    return false;
  }


  ngOnDestroy(): void {
    tinymce.remove(this.editor);
  }
}
