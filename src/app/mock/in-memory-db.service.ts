import {InMemoryDbService} from 'angular-in-memory-web-api';
import {BlogSummary} from 'app/model/blog-summary.model';
import {BlogComment} from '../model/blog-comment.model';
import {BlogDetail} from '../model/blog-detail.model';
import {BlogTag} from '../model/blog-tag.model';
import {User} from '../model/user.model';
const blogTags: BlogTag[] = [
  {id: 1, name: '标签1', blogCount: 1},
  {id: 2, name: '标签2', blogCount: 2},
  {id: 3, name: '标签3', blogCount: 3},
  {id: 4, name: '标签4', blogCount: 4},
  {id: 5, name: '标签5', blogCount: 5},
  {id: 6, name: '标签6', blogCount: 6},
  {id: 7, name: '标签7', blogCount: 7},
  {id: 8, name: '标签8', blogCount: 8},
  {id: 9, name: '标签9', blogCount: 9},
  {id: 10, name: '标签10', blogCount: 10},
  {id: 11, name: '标签11', blogCount: 11},
  {id: 12, name: '标签12', blogCount: 12},
  {id: 13, name: '标签13', blogCount: 13},
  {id: 14, name: '标签14', blogCount: 14}
];
const blogSummaries: BlogSummary[] = [
  {
    id: 1,
    title: 'title1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    info: 'this is my info 范德萨分但是发送旅客的飞机撒到了风as了解的萨芬萨克发送大夫撒旦',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a1', 'b1', 'c1'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
},
  {
    id: 3,
    title: 'title3',
    info: 'this is my info 3',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a3', 'b3', 'c3'],
    postDate: new Date()
  },
  {
    id: 4,
    title: 'title4',
    info: 'this is my info 4',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a4', 'b4', 'c4'],
    postDate: new Date()
  },
  {
    id: 5,
    title: 'title5',
    info: 'this is my info 5',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a5', 'b5', 'c5'],
    postDate: new Date()
  },
  {
    id: 6,
    title: 'title6',
    info: 'this is my info 6',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a6', 'b6', 'c6'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    id: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  }
];
const blogDetail: BlogDetail = {
  id: 1,
  title: 'first title',
  info: 'this is my info 范德萨分但是发送旅客的飞机撒到了风as了解的萨芬萨克发送大夫撒旦',
  infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
  content: `
  <p>过去毕业的一年就只用java,到了现在脑残的真的只会写脚本逻辑了，现在要开始奋斗了。<br />
在windows上预览了下wordpress感觉用起来简单极了。但是部署到linux上还是花费了些功夫，手动打了下LAMP环境。<br />
本来用yum和rpm安装apache是很简单的，但是脑残PHP就像用最新版的，于是就去下了PHP7源码来编译。然后就在PHP的mysql支持上犯浑了。</p>
<p>1.安装apache,不管是yum还是rpm都是要安装<span style="color: #ff0000;"><strong>httpd-devel</strong></span>而不只是httpd，这包含了apxs,可以让apache很轻松的就能扩展其他插件,PHP就是这样和apache就是这样弄上去的。</p>
<p>2.mysql,使用的是mariadb，和mysql可以说是一个娘生的，用起来也是一样。</p>
<p>3.PHP7的源码安装。现在想想就只有那么几步。<br />
首先都是进入源码包中./configure &#8211;help来输出看有哪些选项。不过LAMP的集成需要的选项不多，于是最后就<span style="color: #000000;">制定了需要的</span>这几项：<br />
./configure<br />
&#8211;prefix=/opt/php<br />
<span style="color: #ff0000;"><strong>&#8211;with-apxs2=/usr/bin/apxs</strong></span><br />
&#8211;with-config-file-path=/etc/<br />
&#8211;with-config-file-scan-dir=/usr/etc/php.d<br />
<span style="color: #ff0000;"><strong>&#8211;enable-mysqlnd</strong></span><br />
&#8211;with-mysqli=mysqlnd<br />
<strong><span style="color: #ff0000;">&#8211;with-pdo-mysql=mysqlnd</span></strong><br />
一共指定了6项。<br />
&#8211;prefix是用来指定php的安装目录的，虽然可以不需要，但是指定了以后就好删除，找文件也简单些。<br />
&#8211;with-apxs2是用来为apache扩展php用的,因为安装的httpd-devel包含了apxs,所以直接which apxs来找到apxs的位置就ok了。<br />
&#8211;with-config-file-path是指定php去这目录下找php.ini,php最重要的配置文件。这个后下面一个项也都有默认值，但是指定明确总是好的。<br />
然后就是mysql的驱动了。PHP7已经把mysql移掉了，所以不能直接使用mysql的驱动.但是wordpress用的都是mysql，所以制定mysqlnd(php的native drive)来驱动。<br />
./configure可以检查源码需要的依赖，如果输出的信息中有什么缺少依赖的信息就直接yum/rpm/源码安装这些依赖之后再回来。之后./configure就会在该目录下<br />
生成Makefile文件，最后就是make &amp;&amp; make test &amp;&amp; make install来编译安装php了。</p>
<p>由于&#8211;with-apxs2这一项安装完php过程中就会直接修改apache的配置文件httpd.conf来载入libphp7.so，然后从php源码中复制php.ini-development或php.ini-production<br />
到&#8211;with-config-file-path指定的目录下，改名php.ini。然后是apache的权限问题启动apache之后可能会读不到php.ini,所以要在httpd.conf中在libphp7.so之前加入php<br />
的配置目录PHPIniDir &#8220;/etc&#8221;。<br />
LAMP这样就搞定了。</p>
<p>最后httpd.conf的VirtualHost以及php类型文件的支持,别忘了给wordpress的项目目录添加访问权限,也就是红色部分<br />
DirectoryIndex index.php index.html<br />
AddType application/x-httpd-php .php<br />
AddType application/x-httpd-php-source .phps</p>
<p>&lt;VirtualHost www.goiot.org:80&gt;<br />
DocumentRoot &#8220;wordpress目录&#8221;<br />
ErrorLog  &#8220;wordpress目录/log/error.log&#8221;<br />
CustomLog  &#8220;wordpress目录/log/access.log&#8221; common<br />
<strong><span style="color: #ff0000;">    &lt;Directory &#8220;wordpress目录&#8221;&gt;</span></strong><br />
<strong><span style="color: #ff0000;">        Options Indexes FollowSymLinks</span></strong><br />
<strong><span style="color: #ff0000;">        AllowOverride None</span></strong><br />
<strong><span style="color: #ff0000;">        Require all granted</span></strong><br />
<strong><span style="color: #ff0000;">    &lt;/Directory&gt;</span></strong><br />
&lt;/VirtualHost&gt;</p>
<p>然后重启apache就可以设置和访问网站了。</p>
<p>PS:原来源码安装就是固定的几步,主要靠的就是源码中的configure文件。<br />
1.进入源码文件夹, ./configure &#8211;help 来查看选项<br />
2../configure [选项设置] 来查来依赖和生成Makefile文件<br />
3.用make系列的工具来编译安装。</p>
  `,
  tags: ['a1', 'b1', 'c1'],
  postDate: new Date(),
  updateDate: new Date()
};

const blogComments: BlogComment[] = [
  {id: 1, postId: 1, author: 'goiot', content: '@sky  很抱歉，估计是某次改动影响到了，晚上修复一下，多谢反馈！', postDate: new Date()},
  {id: 2, postId: 1, author: 'goiot1', content: '体验效果 无法体验', postDate: new Date()},
  {id: 3, postId: 1, author: 'goiot2', content: '体验效果 无法体验', postDate: new Date()},
  {id: 4, postId: 1, author: 'goiot3', content: '体验效果 无法体验', postDate: new Date()},
  {id: 5, postId: 1, author: 'goiot4', content: '体验效果 无法体验', postDate: new Date()},
  {id: 6, postId: 1, author: 'goiot5', content: '体验效果 无法体验', postDate: new Date()},
  {id: 7, postId: 1, author: 'goiot6', content: '体验效果 无法体验', postDate: new Date()},
  {id: 8, postId: 1, author: 'goiot7', content: '体验效果 无法体验', postDate: new Date(), parentId: 1}
];

const user: User = {id: 1, userName: 'goiot', nickName: 'chenxing', rememberMe: true};
export class InMemoryDbServiceImpl extends InMemoryDbService {

  createDb(): {} {
    return {
      blog: InMemoryDbServiceImpl.addFindToArray([
        /** blog/tags*/
        {id: 'tags', data: blogTags},
        /**blog/summaries*/
        {id: 'summaries', data: blogSummaries},
        /**blog/detail/{id}*/
        {id: 'detail', data: blogDetail},
        /**blog/postComments/{postId}:*/
        {id: 'postComments', data: blogComments},
        /**blog/tagSummaries/{id}*/
        {id: 'tagSummaries', data: blogSummaries}
      ]),
      login: user,
      logout: true
    };
  }

  /**
   * add find() function to array
   * @param collection
   */
  static addFindToArray(array: any[]): any[] {
    var find = function (filter: (item) => boolean): any[] {
      for (var i = 0; i < array.length; i++) {
        var item: any = array[i];
        if (filter(item)) {
          return item.data;
        }
      }
      return null;
    };
    array.find = find;
    return array;
  }
}