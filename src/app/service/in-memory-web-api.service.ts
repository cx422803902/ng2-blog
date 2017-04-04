import {InMemoryDbService} from "angular-in-memory-web-api";
import {BlogTag} from "../blog/model/blog-tag.model";
import {BlogRemark} from "../blog/model/blog-remark.model";
import {BlogDetail} from "../blog/model/blog-detail.model";
import {BlogComment} from "../blog/model/blog-comment.model";

const blogTags: BlogTag[] = [
  {tagId: 1, tagContent: '标签1', tagCount: 1},
  {tagId: 2, tagContent: '标签2', tagCount: 2},
  {tagId: 3, tagContent: '标签3', tagCount: 3},
  {tagId: 4, tagContent: '标签4', tagCount: 4},
  {tagId: 5, tagContent: '标签5', tagCount: 5},
  {tagId: 6, tagContent: '标签6', tagCount: 6},
  {tagId: 7, tagContent: '标签7', tagCount: 7},
  {tagId: 8, tagContent: '标签8', tagCount: 8},
  {tagId: 9, tagContent: '标签9', tagCount: 9},
  {tagId: 10, tagContent: '标签10', tagCount: 10},
  {tagId: 11, tagContent: '标签11', tagCount: 11},
  {tagId: 12, tagContent: '标签12', tagCount: 12},
  {tagId: 13, tagContent: '标签13', tagCount: 13},
  {tagId: 14, tagContent: '标签14', tagCount: 14},
];
const blogRemarks: BlogRemark[] = [
  {
    postId: 1,
    title: 'title1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    info: 'this is my info 范德萨分但是发送旅客的飞机撒到了风as了解的萨芬萨克发送大夫撒旦',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a1', 'b1', 'c1'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 3,
    title: 'title3',
    info: 'this is my info 3',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a3', 'b3', 'c3'],
    postDate: new Date()
  },
  {
    postId: 4,
    title: 'title4',
    info: 'this is my info 4',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a4', 'b4', 'c4'],
    postDate: new Date()
  },
  {
    postId: 5,
    title: 'title5',
    info: 'this is my info 5',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a5', 'b5', 'c5'],
    postDate: new Date()
  },
  {
    postId: 6,
    title: 'title6',
    info: 'this is my info 6',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a6', 'b6', 'c6'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  },
  {
    postId: 2,
    title: 'title2',
    info: 'this is my info 2',
    infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
    tags: ['a2', 'b2', 'c2'],
    postDate: new Date()
  }
];
''
const blogDetail: BlogDetail = {
  id: 1,
  title: 'first title',
  info: 'this is my info 范德萨分但是发送旅客的飞机撒到了风as了解的萨芬萨克发送大夫撒旦',
  infoImg: 'http://fun.youth.cn/yl24xs/201702/W020170217493133403781.jpg',
  content: `
  过去毕业的一年就只用java,到了现在脑残的真的只会写脚本逻辑了，现在要开始奋斗了。
在windows上预览了下wordpress感觉用起来简单极了。但是部署到linux上还是花费了些功夫，手动打了下LAMP环境。
本来用yum和rpm安装apache是很简单的，但是脑残PHP就像用最新版的，于是就去下了PHP7源码来编译。然后就在PHP的mysql支持上犯浑了。

1.安装apache,不管是yum还是rpm都是要安装<span style="color: #ff0000;"><strong>httpd-devel</strong></span>而不只是httpd，这包含了apxs,可以让apache很轻松的就能扩展其他插件,PHP就是这样和apache就是这样弄上去的。

2.mysql,使用的是mariadb，和mysql可以说是一个娘生的，用起来也是一样。

3.PHP7的源码安装。现在想想就只有那么几步。
首先都是进入源码包中./configure --help来输出看有哪些选项。不过LAMP的集成需要的选项不多，于是最后就<span style="color: #000000;">制定了需要的</span>这几项：
./configure
--prefix=/opt/php
<span style="color: #ff0000;"><strong>--with-apxs2=/usr/bin/apxs</strong></span>
--with-config-file-path=/etc/
--with-config-file-scan-dir=/usr/etc/php.d
<span style="color: #ff0000;"><strong>--enable-mysqlnd</strong></span>
--with-mysqli=mysqlnd
<strong><span style="color: #ff0000;">--with-pdo-mysql=mysqlnd</span></strong>
一共指定了6项。
--prefix是用来指定php的安装目录的，虽然可以不需要，但是指定了以后就好删除，找文件也简单些。
--with-apxs2是用来为apache扩展php用的,因为安装的httpd-devel包含了apxs,所以直接which apxs来找到apxs的位置就ok了。
--with-config-file-path是指定php去这目录下找php.ini,php最重要的配置文件。这个后下面一个项也都有默认值，但是指定明确总是好的。
然后就是mysql的驱动了。PHP7已经把mysql移掉了，所以不能直接使用mysql的驱动.但是wordpress用的都是mysql，所以制定mysqlnd(php的native drive)来驱动。
./configure可以检查源码需要的依赖，如果输出的信息中有什么缺少依赖的信息就直接yum/rpm/源码安装这些依赖之后再回来。之后./configure就会在该目录下
生成Makefile文件，最后就是make &amp;&amp; make test &amp;&amp; make install来编译安装php了。

由于--with-apxs2这一项安装完php过程中就会直接修改apache的配置文件httpd.conf来载入libphp7.so，然后从php源码中复制php.ini-development或php.ini-production
到--with-config-file-path指定的目录下，改名php.ini。然后是apache的权限问题启动apache之后可能会读不到php.ini,所以要在httpd.conf中在libphp7.so之前加入php
的配置目录PHPIniDir "/etc"。
LAMP这样就搞定了。

最后httpd.conf的VirtualHost以及php类型文件的支持,别忘了给wordpress的项目目录添加访问权限,也就是红色部分
DirectoryIndex index.php index.html
AddType application/x-httpd-php .php
AddType application/x-httpd-php-source .phps

&lt;VirtualHost www.goiot.org:80&gt;
DocumentRoot "wordpress目录"
ErrorLog  "wordpress目录/log/error.log"
CustomLog  "wordpress目录/log/access.log" common
<strong><span style="color: #ff0000;">    &lt;Directory "wordpress目录"&gt;</span></strong>
<strong><span style="color: #ff0000;">        Options Indexes FollowSymLinks</span></strong>
<strong><span style="color: #ff0000;">        AllowOverride None</span></strong>
<strong><span style="color: #ff0000;">        Require all granted</span></strong>
<strong><span style="color: #ff0000;">    &lt;/Directory&gt;</span></strong>
&lt;/VirtualHost&gt;

然后重启apache就可以设置和访问网站了。

PS:原来源码安装就是固定的几步,主要靠的就是源码中的configure文件。
1.进入源码文件夹, ./configure --help 来查看选项
2../configure [选项设置] 来查来依赖和生成Makefile文件
3.用make系列的工具来编译安装。
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
  {id: 8, postId: 1, author: 'goiot7', content: '体验效果 无法体验', postDate: new Date(), parentId: 1},
];
export class InMemoryWebService implements InMemoryDbService {

  createDb(): {} {
    return {
      blog: this.addFunctionOfFind([
        {id: 'tags', data: blogTags}, /**blog/tags*/
        {id: 'remarks', data: blogRemarks}, /**blog/remarks*/
        {id: 'detail', data: blogDetail}, /**blog/detail/{postId}*/
        {id: 'postComments', data: blogComments}, /**blog/postComments/{postId}:*/
        {id: 'tagPosts', data: blogRemarks}
      ])
    };
  }


  addFunctionOfFind(collection: any[]): any[] {
    collection.find = function (filter: (item) => boolean): any[] {
      for (var i = 0; i < collection.length; i++) {
        var item: any = collection[i];
        if (filter(item)) {
          var data: any[] = item.data;
          return data;
        }
      }
      return null;
    };
    return collection;
  }

}

