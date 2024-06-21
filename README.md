# <center>yulinZ Blog系统</center>

yulinZ Blog是一款基于Express,vue3和MySQL 的博客系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。

## 🌈系统特色

* 基于chanjs轻量级mvc框架实现，轻量、灵活、稳定、高性能。
* SEO。专注于`seo`,伪静态`html`和拼音导航，灵活设置关键词和描述。
* 安全。基于`knex`,高防`sql`注入，接口权限校验，为安全提供保障。
* 灵活。碎片功能，支持零碎文案配置，方便各类灵活文案配置。
* 高扩展。支持扩展模型，字段配置，可动态生成表，超强扩展。
* 模块化。一切模块相互独立，互不干扰。
* 插件化。灵活开发，支持完整功能模块。
* 支持无头cms，为多端提供接口支持。

## 🚧功能介绍

* 网站信息
* 站点管理
* 栏目管理
* 文章模块
* 标签管理
* 碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)
* 扩展模型
* 文章采集
* 用户管理
* 菜单管理
* 登录日志
* 在线留言
* 中英切换
* 语音播报
* pdf预览（按需加载）
* 本地上传&七牛云上传
* 日志功能

## ⛱️软件架构

**client技术栈**

后台管理界面admin

* vue3
* vue-router
* pina
* element-plus
* vite4
* markdown

前台文章展示界面vue-blog
* vue3
* vue-router
* pina
* vuetify ui
* vite4
* markdown
* unhead/vue
  
**服务端技术栈**

* nodejs v18.14.2+
* express 4.18+
* mysql v5.7.26
* knex (sql操作)
* art-tempate v4.13.2+
* pm2   v5.2.2
* jwt  
* pm2 (prd)
* nodemon (dev)
  
### 项目架构

```
server 部署代码
|- app
    |- config
    |- extend 
    |- middleware 
    |- modules
      |-api 
        |-- controller
        |-- service
        |-- router.js
      |-home 
        |-- controller
        |-- middleware
        |-- service
        |-- view
        |-- router.js
    |- plugin 
        |- open
          |-- controller
          |-- service
          |-- view
          |-- router.js
    |- public
    |- utils
    |- router.js
  app.js
  ```

## 👵开发文档
## chanyue

* **官网:<https://www.chancms.top>**
* **官网文档 <https://www.chancms.top/docs/index.html>**
* **chanyue源码:<https://gitee.com/yanyutao0402/chanyue-cms>**

## 👴项目交流

 如果喜欢此项目，请点个 Star。
 QQ: `1504335501` 🧒 👧 👱  🧔 👴

## 部分截图
![前台展示](https://gitee.com/yulinzhu/pic-window/raw/master/img/1718958475210.jpg)

![后台展示](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/info.png)

![后台展示](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/article.png)
