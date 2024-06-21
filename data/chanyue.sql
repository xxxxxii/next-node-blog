/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : chanyue

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 09/06/2024 22:46:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL COMMENT '栏目id',
  `sub_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它栏目id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `short_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短标题',
  `tag_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签id',
  `attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1头条 2推荐 3轮播 4热门',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章简述',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '缩略图',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `pv` int(10) NULL DEFAULT 0 COMMENT '浏览量',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '外链',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 86 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (80, 8, '', '关于作者：明空', '', '', '', '', '', '', '', '', '明空，ChanCMS开发作者。', '', '<p>明空，<strong>ChanCMS</strong>开发作者。</p>\n<p>拥有逾十年实战经验的前端开发资深专家，始终保持一线开发的敏锐触觉与持续创新精神，紧跟技术潮流，与时俱进。</p>\n<p>2012年，大学毕业后即投身前端领域，在网页三剑客（Dreamweaver、Flash、Fireworks）盛行的时代，熟练掌握DW、FALSH、FW&amp;FL等工具，应对IE6、IE7、IE8等浏览器兼容问题游刃有余，奠定扎实的前端基础。</p>\n<p>2013年，随着Web技术的发展，适时拓宽技能栈，涉足后端领域，学习并精通PHP与MySQL，熟练运用DedeCMS、Discuz!等主流建站系统，亲历&ldquo;PHP是世界上最好的语言&rdquo;这一口号盛行的时期。</p>\n<p>2015年，随着前后端分离理念的普及与Ajax技术的广泛应用，迅速响应行业变革，投身微信小程序的早期开发浪潮，成为<strong>首批微信小程序生态的开发者</strong>。</p>\n<p>2016年，面对Node.js的崛起，明空深入研究并掌握了Express与Koa2等Node.js框架，深入mysql数据库设计，成为<strong>首批nodejs生态全栈开发者。</strong></p>\n<p>2017年，前端工程化趋势日益明显，React与Vue两大框架崭露头角，Grunt、Gulp、Webpack等构建工具百花齐放。紧跟潮流，熟练驾驭这些现代工具与框架，为项目构建高效、规范的开发流程。</p>\n<p>2018年，Vue2体系趋于成熟，深耕细作，以苦干实干的精神投入到大量项目的实际开发中，积累了丰富的实战经验，成为Vue阵营中的坚实砥柱。</p>\n<p>2019年，着眼未来，明空进一步拓宽技术视野，涉足小游戏开发领域，精研Canvas与3D技术，深度探索动画效果实现，为丰富交互体验贡献卓越技术力量。</p>\n<p>2021年，Vue3横空出世，迅速掌握React其新特性与设计理念，积极参与到新一代前端框架的应用实践中，见证并推动Vue/react生态的双峰并立格局形成。</p>\n<p>2024年，面对席卷行业的&ldquo;卷文化&rdquo;，以积极态度应对竞争压力，不断提升自我，卷入技术深度与广度的双重修炼中，力求在日益激烈的前端市场中稳扎稳打，以高效、优质的搬砖精神应对行业挑战，持续为项目增效赋能。</p>', 0, 34, '', '2024-03-31 20:30:35', '2024-06-09 22:38:44');
INSERT INTO `article` VALUES (81, 3, '', 'ChanCMS快速入门', '', '1,6', '', '', '', '', '', '', 'ChanCMS快速入门，启动项目。', '', '<h2>环境配置​</h2>\n<p>前置条件：安装node.js mysql 和 mysql可视化工具。本地开发推荐用phpStudy。</p>\n<p><span style=\"color: rgb(230, 126, 35);\">WARNING</span></p>\n<p>注意：版本有要求</p>\n<pre class=\"language-markup\"><code>nodejs v18.14.2+\nmysql v5.7.26(兼容v5.6)</code></pre>\n<h2>获取项目​</h2>\n<p>下载地址</p>\n<pre class=\"language-markup\"><code>https://gitee.com/yanyutao0402/chanyue-cms</code></pre>\n<h2>框架结构</h2>\n<pre class=\"language-markup\"><code>|- client (后台管理界面源码，二次开发使用，不需要部署到服务器)\n      |- admin 后台管理\n|- data \n      |- chanyue.sql 数据库文件\n|- server 源码(重点部署到服务器)\n      |- app\n      |- config 配置\n      |- extend 扩展功能\n      |- middleware 中间件\n      |- modules 模块\n            |-api   模块\n                 |-- controller\n                 |-- service\n                 |-- router.js\n            |-home 模块\n                 |-- controller\n                 |-- service\n                 |-- view\n                 |-- router.js\n             |-common 模块\n                 |-- controller\n                 |-- service\n                 |-- view\n                 |-- router.js\n            ...\n       |- plugin 插件\n       |- public 静态资源\n       |- utils 工具\n       |- router.js 总路由\n       |-app.js 应用入口\n       |-pm2.json pm2管理</code></pre>\n<h2>安装运行​</h2>\n<p>1 导入数据库文件</p>\n<pre class=\"language-markup\"><code>data/chanyue.sql</code></pre>\n<p>2 修改数据库配置文件</p>\n<pre class=\"language-markup\"><code>server/config/config.dev.js //开发环境\nserver/config/config.prd.js //生产环境</code></pre>\n<p>3 设置npm源安装依赖，切换新镜像源</p>\n<pre class=\"language-markup\"><code>npm config set registry https://registry.npmmirror.com </code></pre>\n<p>4.安装依赖运行</p>\n<pre class=\"language-markup\"><code>npm i\nnpm run dev</code></pre>\n<p>前台后访问 http://localhost:81 ，完成网站启动。</p>\n<p>5.后台管理​</p>\n<p>访问地址</p>\n<pre class=\"language-markup\"><code>http://localhost:81/public/admin/index.html</code></pre>\n<p>默认账号密码：</p>\n<pre class=\"language-markup\"><code>chanyue 123456</code></pre>', 0, 10, '', '2024-04-03 20:28:41', '2024-04-03 23:00:23');
INSERT INTO `article` VALUES (82, 3, '', 'ChanCMS模块介绍', '', '1,6', '', '', '', '', '', '', 'ChanCms作为一款内容管理系统，其核心模块被划分为三个主要部分：api模块、common模块和home模块。', '', '<p>ChanCms作为一款内容管理系统，其核心模块被划分为三个主要部分：api模块、common模块和home模块。这些模块各司其职，共同构成了系统的核心功能架构。针对您的要求，我对原有描述进行了文案优化如下：</p>\n<h2>API模块</h2>\n<p>API模块专为后台操作设计，构建了一套完备的接口服务体系。此模块面向后台管理系统及可能涉及的外部应用，提供安全、高效的数据交互通道。通过标准化的RESTful API接口，它实现了对内容管理、用户权限、系统设置等关键业务逻辑的远程调用支持。无论是执行数据增删改查、获取统计报表，还是进行复杂的后台配置与管理任务，API模块均能确保后台操作的无缝集成与流畅执行，为后台管理人员提供便捷、可控的操作环境。</p>\n<h2>Common模块</h2>\n<p>Common模块作为系统的通用接口中枢，专注于为无头CMS（Headless CMS）应用场景提供强有力的支持。它无缝衔接各类前端框架与平台，确保内容能在PC端SSR（Server-Side Rendering）环境、移动端WAP站点以及各类小程序中顺畅展现。此模块精心封装了一系列与平台无关的接口服务，兼顾灵活性与适应性，使得内容能够在多渠道、多设备间实现统一的内容分发与呈现，极大地简化了跨平台内容部署与更新的工作流程，助力企业轻松构建现代化、响应式的跨终端内容体验。</p>\n<h2>Home模块</h2>\n<p>Home模块专注于打造以搜索引擎优化（SEO）为核心的网站前端。它采用传统的服务端模板渲染技术，精心生成符合SEO最佳实践的HTML静态页面，确保网站内容能够被搜索引擎快速、准确地抓取、理解和排名。此模块不仅提供丰富的模板体系和高度定制化的页面布局选项，还兼顾用户体验，确保访问者在各类浏览器环境下都能获得快速加载、易于导航的优质内容浏览体验。Home模块是构建高搜索引擎可见度、提升自然流量与用户黏性的基石，尤其适用于对SEO效果有严格要求的网站建设项目。</p>\n<pre class=\"language-markup\"><code> |- modules 模块\n       |-api  模块\n            |-- controller\n            |-- service\n            |-- router.js\n       |-home 模块\n             |-- controller\n             |-- service\n             |-- view\n             |-- router.js\n        |-common 模块\n              |-- controller\n              |-- service\n              |-- view\n              |-- router.js</code></pre>', 0, 3, '', '2024-04-03 20:54:44', '2024-05-23 22:08:07');
INSERT INTO `article` VALUES (83, 3, '', 'ChanCMS内容管理系统', '', '1,6', '2', '', '', '', '', '', 'ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', '', '<p>ChanCMS是一款基于Express和MySQL构建的轻量级、高质量实用型内容管理系统（CMS）。以下是对这款CMS系统可能具备的特性和功能的概述：</p>\n<ol>\n<li>\n<p><strong>轻量化架构</strong>：ChanCMS采用自研chanjs轻量级mvc框架实现，轻量、灵活、稳定、高性能，且可持续。用Express作为底层框架，以其简洁、灵活、高效的特性实现快速响应的API开发。结合MySQL数据库，提供稳定、高效的数据存储与查询能力。整体设计注重性能优化和资源高效利用，确保系统在有限的硬件资源下仍能保持良好的运行效率。</p>\n</li>\n<li>\n<p><strong>模块化设计</strong>：系统采用模块化架构，各功能模块如用户管理、权限控制、内容发布、媒体管理、模板引擎等独立且可扩展，便于开发者根据实际需求进行定制和二次开发。</p>\n</li>\n<li>\n<p><strong>内容管理</strong>：提供便捷的内容编辑、分类、标签管理功能，支持富文本编辑器，方便用户创建、编辑和发布各类图文、视频等内容。满足不同内容管理场景需求。</p>\n</li>\n<li>\n<p><strong>用户与权限管理</strong>：内置完善的用户注册、登录、角色分配及权限控制系统。支持多用户协作，可根据角色设定不同的操作权限，确保系统数据安全。</p>\n</li>\n<li>\n<p><strong>SEO友好</strong>：内置SEO优化机制，支持自定义页面标题、描述、关键词等SEO元素，生成利于搜索引擎收录的URL结构，提升网站在搜索引擎中的排名。</p>\n</li>\n<li>\n<p><strong>模板与主题系统</strong>：采用灵活的模板引擎，支持自定义前端主题和布局，允许用户或设计师根据品牌风格轻松调整网站外观，无需深入代码即可实现界面个性化。</p>\n</li>\n<li>\n<p><strong>插件与扩展</strong>：提供插件接口，用户或开发者可以开发并安装各种功能插件，如评论系统、统计分析、社交媒体集成等，以扩展系统的功能，满足多样化需求。</p>\n</li>\n<li>\n<p><strong>API支持</strong>：提供RESTful API接口，方便与其他系统（如移动应用、第三方服务等）进行数据交互和集成。</p>\n</li>\n<li>\n<p><strong>文档与社区支持</strong>：提供详尽的用户手册、开发者文档以及活跃的技术社区支持，帮助用户快速上手、解决问题并持续学习。</p>\n</li>\n</ol>\n<p data-spm-anchor-id=\"5176.28103460.0.i5.297c3f99fjQmkZ\">综上所述，ChanCMS作为一款基于Express+MySQL的轻量级CMS管理系统，以其灵活、易用、可扩展的特性，<span>它具备多种类型网站开发，公司，企业，学校，政府，图片，下载，产品等各类型商用网站建设。</span></p>\n<h2>核心功能模块</h2>\n<ul>\n<li>网站信息</li>\n<li>站点管理</li>\n<li>栏目管理</li>\n<li>文章模块</li>\n<li>标签管理</li>\n<li>碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)</li>\n<li>扩展模型</li>\n<li>文章采集</li>\n<li>用户管理</li>\n<li>菜单管理</li>\n<li>登录日志</li>\n<li>在线留言</li>\n<li>本地上传&七牛云上传</li>\n<li>日志功能</li>\n</ul>\n<h2>默认插件</h2>\n<ul>\n<li>中英切换(js插件)</li>\n<li>语音播报(js插件)</li>\n<li>pdf预览(按需加载)</li>\n<li>代码展示</li>\n</ul>', 0, 5, '', '2024-04-03 21:18:44', '2024-04-03 21:18:44');
INSERT INTO `article` VALUES (84, 6, NULL, '基于express封装轻量级mvc框架chanjs', '', '', '', '', '', '', '', '', '', '', '<h2>背景</h2>\n<p>基于国内koa2封装的thinkjs和eggjs基本都黄了，或者不更新了。而且koa2的市场占有量的确不如express，加上本人不喜欢typescript和nestjs风格，所以就想实现一个mvc框架。</p>\n<h2>chanjs介绍</h2>\n<p>Chanjs 基于express 纯js研发的轻量级mvc框架。基于函数式编程思想，性能优越，代码清晰，流程易读，可持续维护高。</p>\n<p>核心功能</p>\n<p>配置文件多模块mvc数据库支持路由控制art-template模板静态资源cookie日志功能参考</p>\n<p>thinkjs多模块eggjs约定优于配置原则约定结构</p>\n<pre class=\"language-markup\"><code>|- app\n\n|- config 配置\n\n|- module 模块1\n\n|- module1 模块1\n\n|- controller 控制器\n\n|- service 服务模型\n\n|- view 视图模板\n\n|- router.js 路由\n\n|- module2 模块2\n\n|- controller 控制器\n\n|- service 服务模型\n\n|- view 视图模板\n\n|- router.js路由\n\n|- extend 扩展\n\n|- middleware 中间件\n\n|- plugin 插件\n\n|- public 静态文件\n\n|- index.js</code></pre>\n<p>初始化流程</p>\n<p>框架加载默认约定结构，动态加载模块，分为以下几个流程：</p>\n<pre class=\"language-markup\"><code>- 初始化\n\n- 加载配置\n\n- 加载模块\n\n- 加载service\n\n- 加载controller\n\n- 加载router\n\n- 加载extend\n\n- 加载plugin\n\n- beforeStart() 挂在从数据库获取的配置合并到配置文件中\n\n- run() 启动服务</code></pre>\n<p>核心代码实现</p>\n<pre class=\"language-javascript\"><code>const express = require(\"express\");\n\nconst config = require(\"./lib/config/config.js\");\n\nconst path = require(\"path\");\n\nconst fs = require(\"fs\");\n\nconst core = require(\"./lib/core.js\");\n\n/**\n\n* @description 基于express封装的mvc框架，遵循约定优于配置原则\n\n*/\n\nclass Chan {\n\nconstructor(options={}) {\n\n//配置\n\nChan.config = Object.assign(config, options);\n\n//模块\n\nChan.modules ={};\n\n//工具\n\nChan.helper ={};\n\n//应用实例\n\nthis.app = express();\n\nthis.app.config = Chan.config;\n\nthis.router = express.Router();\n\n//加载配置\n\nthis.loadConfig();\n\n//加载扩展\n\nthis.loadExtends();\n\n//加载核心(日志、favicon 图标、cookie、json、url、模板引擎、静态资源)\n\nthis.loadCore();\n\n//加载实例化数据库\n\nthis.loadKnex();\n\n//生命周期钩子：开始启动\n\nthis.beforeStart();\n\n//加载模块\n\nthis.loadModules();\n\n//生命周期：初始化完成\n\nthis.start()\n\n}\n\n// 加载配置\n\nloadConfig() {\n\nconst configPath = path.join(config.APP_PATH, \"config/index.js\");\n\nif (fs.existsSync(configPath)) {\n\nconst config = require(configPath);\n\nChan.config = Object.assign(Chan.config, config);\n\n}\n\n}\n\n// 加载扩展\n\nloadExtends() {\n\nconst extendPath = path.join(config.APP_PATH, \"extend\");\n\nif (fs.existsSync(extendPath)) {\n\nlet controllers = fs\n\n.readdirSync(extendPath)\n\n.filter((file) =&gt; file.endsWith(\".js\"));\n\nfor (let i = 0, file; i &lt; controllers.length; i++) {\n\nfile = controllers[i];\n\nconst helper = require(path.join(extendPath, file));\n\nconst fileName = file.replace(\".js\", \"\");\n\nChan.helper[fileName] = helper;\n\n}\n\n}\n\n}\n\n//数据库操作\n\nloadKnex(){\n\n// 连接数据库\n\nconst {host,port,user,password,database,client,charset} = Chan.config.database;\n\nconst knex = require(\"knex\")({\n\nclient: \"mysql2\",\n\nconnection: {\n\nhost,\n\nport,\n\nuser,\n\npassword,\n\ndatabase,\n\ncharset,\n\n},\n\ndebug: config.debug, //指明是否开启debug模式，默认为true表示开启\n\npool: {\n\n//指明数据库连接池的大小，默认为{min: 2, max: 10}\n\nmin: 0,\n\nmax: 2,\n\n},\n\nlog: {\n\nwarn(message) {\n\nconsole.error(\"[knex warn]\", message);\n\n},\n\nerror(message) {\n\nconsole.error(\"[knex error]\", message);\n\n},\n\n},\n\n});\n\nChan.knex = knex;\n\n}\n\n//开始启动\n\nbeforeStart(cb) {\n\n// 初始化一些配置\n\ncb &amp;&amp; cb();\n\n}\n\n//启动\n\nstart(cb){\n\n// 初始化一些配置\n\ncb &amp;&amp; cb();\n\n}\n\n// 加载插件\n\nloadPlugins() {\n\nconst configPath = path.join(config.APP_PATH, \"plugin\");\n\nif (fs.existsSync(configPath)) {\n\nconst dirs = fs\n\n.readdirSync(configPath, { withFileTypes: true })\n\n.filter((dirent) =&gt; dirent.isDirectory())\n\n.map((dirent) =&gt; dirent.name);\n\nthis.plugins = dirs;\n\n} else {\n\nthis.plugins = [];\n\n}\n\n}\n\n/**\n\n* @description app核心模块：日志、favicon 图标、cookie、json、url、模板引擎、静态资源\n\n*/\n\nloadCore(){\n\ncore(this.app);\n\n}\n\n/**\n\n* @description 模块加载入口(路由&amp;控制器&amp; 服务)\n\n*/\n\nloadModules() {\n\nconst configPath = path.join(config.APP_PATH, \"modules\");\n\nif (fs.existsSync(configPath)) {\n\nconst dirs = fs\n\n.readdirSync(configPath, { withFileTypes: true })\n\n.filter((dirent) =&gt; dirent.isDirectory())\n\n.map((dirent) =&gt; dirent.name);\n\nthis.modulesDir = dirs;\n\nfor(let i=0,item;i \n\nitem = dirs[i];\n\nChan.modules[item] = {\n\ncontroller: {},\n\nservice: {},\n\n};\n\nthis.loadModule(item);\n\n}\n\n//通用路由，加载错误处理和500路由和爬虫处理\n\nconst baseRouterPath = path.join(config.APP_PATH, \"router.js\");\n\nif (fs.existsSync(baseRouterPath)) {\n\nconst _router = require(baseRouterPath);\n\n_router(this.app, this.router);\n\n}\n\n}\n\n}\n\n/**\n\n* @description 加载模块，包括 controller service router\n\n* @param {String} moduleName 模块名称\n\n*/\n\nloadModule(moduleName) {\n\nconst moduleDir = path.join(config.APP_PATH, \"modules\", moduleName);\n\nthis.loadServices(moduleDir,moduleName);\n\nthis.loadControllers(moduleDir,moduleName);\n\nthis.loadRoutes(moduleDir,moduleName);\n\n}\n\n/**\n\n* @description 扫描模块下所有service\n\n* @param {*} moduleDir 模块路径\n\n* @param {*} moduleName 模块名称\n\n*/\n\nloadServices(moduleDir,moduleName) {\n\nconst servicesDir = path.join(moduleDir, \"service\");\n\nif (fs.existsSync(servicesDir)) {\n\nlet services = fs\n\n.readdirSync(servicesDir)\n\n.filter((file) =&gt; file.endsWith(\".js\"));\n\nfor (let i = 0, file; i &lt; services.length; i++) {\n\nfile= services[i]\n\nconst Service = require(path.join(servicesDir, file));\n\nconst serviceName = file.replace(\".js\", \"\");\n\nChan.modules[moduleName].service[serviceName] = {};\n\nChan.modules[moduleName].service[serviceName] = Service;\n\n}\n\n}\n\n}\n\n/**\n\n* @description 扫描模块下所有controller\n\n* @param {*} moduleDir 模块路径\n\n* @param {*} moduleName 模块名称\n\n*/\n\nloadControllers(moduleDir,moduleName) {\n\nconst controllersDir = path.join(moduleDir, \"controller\");\n\nif (fs.existsSync(controllersDir)) {\n\nlet controllers = fs\n\n.readdirSync(controllersDir)\n\n.filter((file) =&gt; file.endsWith(\".js\"));\n\nfor (let i = 0, file; i &lt; controllers.length; i++) {\n\nfile= controllers[i]\n\nconst controller = require(path.join(controllersDir, file));\n\nconst controllerName = file.replace(\".js\", \"\");\n\nChan.modules[moduleName].controller[controllerName] = {};\n\nChan.modules[moduleName].controller[controllerName] = controller;\n\n}\n\n}\n\n}\n\n/**\n\n* @description 扫描模块下所有router.js\n\n* @param {*} moduleDir 模块路径\n\n* @param {*} moduleName 模块名称\n\n*/\n\nloadRoutes(moduleDir,moduleName) {\n\nconst routersDir = path.join(moduleDir, \"router.js\");\n\nif (fs.existsSync(routersDir)) {\n\nconst routes = require(routersDir);\n\nroutes({router:this.router,modules:Chan.modules,app:this.app});\n\n}\n\n}\n\nloadPlusins() {\n\n// 加载插件\n\n}\n\nrun(port) {\n\nthis.app.listen(port, () =&gt; {\n\nconsole.log(`Server is running on port ${port}`);\n\n});\n\n}\n\n}\n\nmodule.exports = Chan;</code></pre>\n<h2>案例</h2>\n<p></p>\n<p>基于chanjs实现chancms管理系统。</p>\n<p>禅CMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。</p>', 0, 3, '', '2024-04-04 08:56:42', '2024-04-30 20:41:18');
INSERT INTO `article` VALUES (85, 3, '', 'ChanCMS实现大文件按需加载pdf在线预览', '', '', '', '', '', '', '', '', 'pdf在线预览的方式', '', '<p>在iframe中引入&nbsp;</p>\n<pre class=\"language-markup\"><code>/public/pdfjs/web/viewer.html?file=/public/document/pdf/1.pdf</code></pre>\n<p><iframe src=\"/public/pdfjs/web/viewer.html?file=/public/document/pdf/1.pdf\" width=\"100%\" height=\"800\"></iframe></p>', 0, 41, '', '2024-05-15 23:18:02', '2024-05-23 22:03:55');

-- ----------------------------
-- Table structure for article_map_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_map_tag`;
CREATE TABLE `article_map_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NULL DEFAULT NULL COMMENT '文章id',
  `tid` int(11) NULL DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 179 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (153, 80, 0);
INSERT INTO `article_map_tag` VALUES (156, 82, 1);
INSERT INTO `article_map_tag` VALUES (157, 82, 6);
INSERT INTO `article_map_tag` VALUES (158, 81, 1);
INSERT INTO `article_map_tag` VALUES (159, 81, 6);
INSERT INTO `article_map_tag` VALUES (160, 83, 1);
INSERT INTO `article_map_tag` VALUES (161, 83, 6);
INSERT INTO `article_map_tag` VALUES (162, 84, 0);
INSERT INTO `article_map_tag` VALUES (178, 85, 0);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT '栏目id',
  `pid` tinyint(2) NOT NULL DEFAULT 0 COMMENT '父级栏目',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo描述',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
  `pinyin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目标识',
  `path` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '栏目路径',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目描述',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 栏目 1 页面',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '网址',
  `sort` tinyint(2) NULL DEFAULT 0 COMMENT '排序',
  `target` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '打开方式 0 当前页面打开 1 新页面打开',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 显示 1隐藏',
  `mid` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '模型id',
  `list_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'list.html' COMMENT '列表页模板',
  `article_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'article.html' COMMENT '详情页模板',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '网站栏目' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 0, '前端开发', '前端开发，es6,es5,javascript,js,css3,微信小程序', '前端开发常用知识，包括es6,es5,javascript,js,css3,微信小程序等常见开发。', '前端', 'qianduan', '/qianduan', '', '0', '', 2, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-31 21:17:20');
INSERT INTO `category` VALUES (2, 0, '', '', '', 'nodejs', 'nodejs', '/nodejs', '', '0', '', 3, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-31 21:17:28');
INSERT INTO `category` VALUES (3, 0, '', '', '', '文档', 'wendang', '/wendang', '', '0', '', 4, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-31 21:17:35');
INSERT INTO `category` VALUES (5, 0, '', '', '', '案例', 'anli', '/anli', '', '1', '', 5, '0', '0', '0', 'list.html', 'chanyue.html', '2023-11-25 12:52:03', '2024-05-31 21:17:40');
INSERT INTO `category` VALUES (6, 2, '', '', '', 'express', 'express', '/nodejs/express', '', '0', '', 7, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-31 21:30:02');
INSERT INTO `category` VALUES (7, 2, '', '', '', 'mysql', 'mysql', '/mysql', '', '0', '', 8, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-31 21:30:11');
INSERT INTO `category` VALUES (8, 0, '', '', '', '作者', 'about', '/about', '', '1', '', 6, '0', '0', '0', 'list.html', 'page.html', '2023-11-25 12:52:03', '2024-05-31 21:17:46');
INSERT INTO `category` VALUES (9, 0, '', '', '', '首页', 'home', '/home', '', '1', '', 1, '0', '0', '0', 'index.html', 'index.html', '2024-05-31 21:16:39', '2024-06-09 19:49:23');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `listTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '列表tag标签',
  `startNum` int(11) NULL DEFAULT 1 COMMENT '开始页面',
  `endNum` int(11) NULL DEFAULT NULL COMMENT '结束页面',
  `increment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '递增数量默认1',
  `titleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `articleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章内容',
  `charset` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '编码 1-> utf-8  2-> gb2312',
  `pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '采集地址集合',
  `parseData` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '格式化数据函数',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (1, '草堂札记', 'http://www.tangnet.cn/lists/31.html?page=${page}', '.news-list h5 a', 1, 1, '1', '.title h1', '.content', '1', 'http://www.tangnet.cn/news/46.html,http://www.tangnet.cn/news/44.html,http://www.tangnet.cn/news/43.html,http://www.tangnet.cn/news/42.html,http://www.tangnet.cn/news/37.html,http://www.tangnet.cn/news/27.html,http://www.tangnet.cn/news/28.html,http://www.tangnet.cn/news/31.html,http://www.tangnet.cn/news/26.html,http://www.tangnet.cn/news/24.html', '', 15, '2', '2023-09-29 19:33:57', '2023-12-10 19:34:42');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of down
-- ----------------------------

-- ----------------------------
-- Table structure for field
-- ----------------------------
DROP TABLE IF EXISTS `field`;
CREATE TABLE `field`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NULL DEFAULT NULL COMMENT '模型id',
  `field_cname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型字段中文名称',
  `field_ename` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模型字段英文名称',
  `field_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表单类型\r\n1单行文本	\r\n2.多行文本 \r\n3.下拉菜单 \r\n4.单选 \r\n5.多选 \r\n6.时间和日期 7.数字',
  `field_values` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段配置 下拉菜单多选等选项配置',
  `field_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '默认值',
  `field_sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '字段顺序',
  `field_length` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段长度',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `model_id`(`model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字段字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of field
-- ----------------------------
INSERT INTO `field` VALUES (1, 1, '下载名称', 'downName', '1', '', '', '0', NULL);
INSERT INTO `field` VALUES (2, 1, '下载链接', 'downLink', '1', '', '', '0', NULL);

-- ----------------------------
-- Table structure for frag
-- ----------------------------
DROP TABLE IF EXISTS `frag`;
CREATE TABLE `frag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '名称',
  `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标识',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `type` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '类型 1 富文本 2 文本框',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (1, '广告', 'ad', '<p>ChanCMS是一款基于Express（一个流行的Node.js web应用框架）和MySQL（一个广泛使用的开源关系型数据库管理系统）构建的轻量级、高质量内容管理系统（CMS）。以下是对这款CMS系统可能具备的特性和功能的概述：</p>\n<ol>\n<li>\n<p><strong>轻量化架构</strong>：ChanCMS采用Express作为后端框架，以其简洁、灵活、高效的特性实现快速响应的API开发。结合MySQL数据库，提供稳定、高效的数据存储与查询能力。整体设计注重性能优化和资源高效利用，确保系统在有限的硬件资源下仍能保持良好的运行效率。</p>\n</li>\n<li>\n<p><strong>模块化设计</strong>：系统采用模块化架构，各功能模块如用户管理、权限控制、内容发布、媒体管理、模板引擎等独立且可扩展，便于开发者根据实际需求进行定制和二次开发。</p>\n</li>\n<li>\n<p><strong>内容管理</strong>：提供便捷的内容编辑、分类、标签管理功能，支持富文本编辑器，方便用户创建、编辑和发布各类图文、视频等内容。满足不同内容管理场景需求。</p>\n</li>\n<li>\n<p><strong>用户与权限管理</strong>：内置完善的用户注册、登录、角色分配及权限控制系统。支持多用户协作，可根据角色设定不同的操作权限，确保系统数据安全。</p>\n</li>\n<li>\n<p><strong>SEO友好</strong>：内置SEO优化机制，支持自定义页面标题、描述、关键词等SEO元素，生成利于搜索引擎收录的URL结构，提升网站在搜索引擎中的排名。</p>\n</li>\n<li>\n<p><strong>模板与主题系统</strong>：采用灵活的模板引擎，支持自定义前端主题和布局，允许用户或设计师根据品牌风格轻松调整网站外观，无需深入代码即可实现界面个性化。</p>\n</li>\n<li>\n<p><strong>插件与扩展</strong>：提供插件接口，用户或开发者可以开发并安装各种功能插件，如评论系统、统计分析、社交媒体集成等，以扩展系统的功能，满足多样化需求。</p>\n</li>\n<li>\n<p><strong>API支持</strong>：提供RESTful API接口，方便与其他系统（如移动应用、第三方服务等）进行数据交互和集成。</p>\n</li>\n<li>\n<p><strong>文档与社区支持</strong>：提供详尽的用户手册、开发者文档以及活跃的技术社区支持，帮助用户快速上手、解决问题并持续学习。</p>\n</li>\n</ol>\n<p data-spm-anchor-id=\"5176.28103460.0.i5.297c3f99fjQmkZ\">综上所述，ChanCMS作为一款基于Express+MySQL的轻量级CMS管理系统，以其灵活、易用、可扩展的特性，<span>它具备多种类型网站开发，公司，企业，学校，政府，图片，下载，产品等各类型网站建设。</span></p>', '1', '2023-07-14 20:48:50', '2024-04-03 21:27:13');
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 <a href=\"https://www.chancms.top\" target=\"_blank\" rel=\"noopener\">ChanCMS</a></p>', '1', '2023-08-05 17:34:49', '2024-03-31 21:15:05');
INSERT INTO `frag` VALUES (3, 'chancms介绍', 'chanyue-introduce', '<h3 class=\"m-title border-dashed f-16 row justify-between\">ChanCms</h3>\n<p class=\"mt-10 f-14 lh-24\">ChanCms内容管理系统，基于nodejs、express、mysql、 knex、jwt、vue3、element-plus 进行开发的一套实用轻量cms系统，同时支持无头cms和模板共存，为需要SEO的网站提供模板支持，为app 、wap、微信小程序提供丰富的接口。满足于常用企业网站，微信小程序，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，经过多年开发和升级迭代，是nodejs开发者最佳选择之一。<a title=\"\" href=\"https://www.chancms.top\" target=\"_blank\" rel=\"noopener\">[详情]</a></p>', '1', '2023-08-05 17:36:09', '2024-03-31 20:11:23');
INSERT INTO `frag` VALUES (4, '底部-前端', 'footer-fe', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">前端</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">JavaScript</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">vue2/vue3</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">react18</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">css3</a></p>\n</div>', '1', '2023-08-10 17:39:04', '2024-05-31 21:36:30');
INSERT INTO `frag` VALUES (5, '底部-nodejs', 'footer-nodejs', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">nodejs</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">express</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mysql</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">knex</a></p>\n</div>', '1', '2023-08-10 17:40:42', '2024-05-31 21:35:32');
INSERT INTO `frag` VALUES (6, '底部-禅悦', 'footer-chanyue', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">ChanCMS</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">文档</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">视频</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">模板</a></p>\n</div>', '1', '2023-08-10 17:41:18', '2024-05-31 21:36:07');
INSERT INTO `frag` VALUES (7, '底部-关于', 'footer-guanyu', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">关于</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">关于我们</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">最新动态</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">联系作者</a></p>\n</div>', '1', '2023-08-10 17:41:52', '2024-05-31 21:35:42');
INSERT INTO `frag` VALUES (8, '首页轮播图', 'homeSlide', '<p><img src=\"/public/template/angke/img/banner.jpg\" alt=\"\"></p>', '1', '2023-11-05 22:29:01', '2023-11-25 12:45:07');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接名称',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接地址',
  `sort` tinyint(255) NULL DEFAULT 0 COMMENT '排序',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '友情链接' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, 'ChanCMS', 'https://www.chancms.top', 0, '2023-07-22 22:59:55', '2024-04-04 08:55:24');

-- ----------------------------
-- Table structure for gather
-- ----------------------------
DROP TABLE IF EXISTS `gather`;
CREATE TABLE `gather`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `parseData` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '格式化数据函数',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '开源接口采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gather
-- ----------------------------
INSERT INTO `gather` VALUES (3, '60s1', 'https://api.qqsuu.cn/api/dm-60s?type=json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.success){\n	obj.title = data.name;\n	let p = \'\';\n	data.data.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n	obj.content = p;\n}\nreturn obj;', 1, '2', '2023-11-29 19:10:45', '2023-12-01 00:07:22');
INSERT INTO `gather` VALUES (4, '60s稳定版本', 'https://api.j4u.ink/v1/store/other/proxy/remote/news/60.json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.code == 200){\n	obj.title = \"香港日报新闻60秒\"+ data.data.date_info.date;\n	let p = \'\';\n	data.data.news.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n       p+=\'<p>[香港日报微语]：\'+data.data.weiyu+\'</p>\'\n      obj.content = p;\n}\nreturn obj;', 15, '1', '2023-12-01 00:03:35', '2023-12-10 19:36:36');

-- ----------------------------
-- Table structure for login_log
-- ----------------------------
DROP TABLE IF EXISTS `login_log`;
CREATE TABLE `login_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`, `createdAt`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 85 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of login_log
-- ----------------------------
INSERT INTO `login_log` VALUES (1, 1, '127.0.0.1', '2023-11-01 17:01:53');
INSERT INTO `login_log` VALUES (2, 3, '127.0.0.1', '2023-11-01 17:38:53');
INSERT INTO `login_log` VALUES (3, 1, '127.0.0.1', '2023-11-01 17:39:49');
INSERT INTO `login_log` VALUES (4, 3, '127.0.0.1', '2023-11-01 17:51:16');
INSERT INTO `login_log` VALUES (5, 2, '127.0.0.1', '2023-11-01 17:51:57');
INSERT INTO `login_log` VALUES (6, 1, '127.0.0.1', '2023-11-01 21:55:40');
INSERT INTO `login_log` VALUES (7, 3, '127.0.0.1', '2023-11-01 22:11:35');
INSERT INTO `login_log` VALUES (8, 1, '127.0.0.1', '2023-11-01 22:11:51');
INSERT INTO `login_log` VALUES (9, 2, '127.0.0.1', '2023-11-01 22:13:49');
INSERT INTO `login_log` VALUES (10, 3, '127.0.0.1', '2023-11-01 22:14:09');
INSERT INTO `login_log` VALUES (11, 2, '127.0.0.1', '2023-11-05 21:39:45');
INSERT INTO `login_log` VALUES (12, 2, '127.0.0.1', '2023-11-05 23:18:19');
INSERT INTO `login_log` VALUES (13, 1, '127.0.0.1', '2023-11-05 23:19:20');
INSERT INTO `login_log` VALUES (14, 2, '127.0.0.1', '2023-11-05 23:41:48');
INSERT INTO `login_log` VALUES (15, 1, '127.0.0.1', '2023-11-05 23:58:42');
INSERT INTO `login_log` VALUES (16, 2, '127.0.0.1', '2023-11-05 23:59:06');
INSERT INTO `login_log` VALUES (17, 1, '127.0.0.1', '2023-11-07 09:35:47');
INSERT INTO `login_log` VALUES (18, 1, '127.0.0.1', '2023-11-08 11:22:11');
INSERT INTO `login_log` VALUES (19, 1, '127.0.0.1', '2023-11-25 12:59:36');
INSERT INTO `login_log` VALUES (20, 2, '127.0.0.1', '2023-11-25 13:00:00');
INSERT INTO `login_log` VALUES (21, 1, '127.0.0.1', '2023-11-25 13:05:01');
INSERT INTO `login_log` VALUES (22, 1, '127.0.0.1', '2023-11-25 18:04:58');
INSERT INTO `login_log` VALUES (23, 1, '127.0.0.1', '2023-11-26 11:56:25');
INSERT INTO `login_log` VALUES (24, 1, '127.0.0.1', '2023-12-05 22:20:58');
INSERT INTO `login_log` VALUES (25, 1, '127.0.0.1', '2023-12-07 20:57:59');
INSERT INTO `login_log` VALUES (26, 1, '127.0.0.1', '2023-12-08 21:29:29');
INSERT INTO `login_log` VALUES (27, 2, '127.0.0.1', '2023-12-08 21:33:06');
INSERT INTO `login_log` VALUES (28, 2, '127.0.0.1', '2023-12-09 09:49:01');
INSERT INTO `login_log` VALUES (29, 2, '127.0.0.1', '2023-12-10 13:10:37');
INSERT INTO `login_log` VALUES (30, 1, '127.0.0.1', '2023-12-10 19:18:41');
INSERT INTO `login_log` VALUES (31, 2, '127.0.0.1', '2023-12-10 19:30:35');
INSERT INTO `login_log` VALUES (32, 2, '127.0.0.1', '2023-12-17 18:48:38');
INSERT INTO `login_log` VALUES (33, 1, '127.0.0.1', '2023-12-17 19:50:41');
INSERT INTO `login_log` VALUES (34, 2, '127.0.0.1', '2023-12-17 20:12:33');
INSERT INTO `login_log` VALUES (35, 2, '127.0.0.1', '2023-12-17 20:15:34');
INSERT INTO `login_log` VALUES (36, 1, '127.0.0.1', '2023-12-17 20:15:49');
INSERT INTO `login_log` VALUES (37, 2, '127.0.0.1', '2023-12-17 20:18:15');
INSERT INTO `login_log` VALUES (38, 2, '127.0.0.1', '2023-12-23 20:20:16');
INSERT INTO `login_log` VALUES (39, 1, '127.0.0.1', '2023-12-31 20:23:16');
INSERT INTO `login_log` VALUES (40, 2, '127.0.0.1', '2023-12-31 20:41:37');
INSERT INTO `login_log` VALUES (41, 1, '127.0.0.1', '2024-01-01 18:07:43');
INSERT INTO `login_log` VALUES (42, 1, '127.0.0.1', '2024-01-19 20:04:56');
INSERT INTO `login_log` VALUES (43, 1, '127.0.0.1', '2024-02-01 23:19:03');
INSERT INTO `login_log` VALUES (44, 1, '127.0.0.1', '2024-02-01 23:28:59');
INSERT INTO `login_log` VALUES (45, 1, '127.0.0.1', '2024-02-01 23:37:21');
INSERT INTO `login_log` VALUES (46, 1, '127.0.0.1', '2024-02-09 20:54:58');
INSERT INTO `login_log` VALUES (47, 1, '127.0.0.1', '2024-02-09 21:23:43');
INSERT INTO `login_log` VALUES (48, 1, '127.0.0.1', '2024-02-17 21:36:44');
INSERT INTO `login_log` VALUES (49, 2, '127.0.0.1', '2024-02-17 21:46:57');
INSERT INTO `login_log` VALUES (50, 1, '127.0.0.1', '2024-02-19 22:20:25');
INSERT INTO `login_log` VALUES (51, 2, '127.0.0.1', '2024-02-22 20:05:46');
INSERT INTO `login_log` VALUES (52, 2, '127.0.0.1', '2024-02-22 21:56:03');
INSERT INTO `login_log` VALUES (53, 2, '127.0.0.1', '2024-03-01 20:21:38');
INSERT INTO `login_log` VALUES (54, 2, '127.0.0.1', '2024-03-02 21:57:39');
INSERT INTO `login_log` VALUES (55, 2, '127.0.0.1', '2024-03-02 22:22:36');
INSERT INTO `login_log` VALUES (56, 2, '127.0.0.1', '2024-03-03 16:41:29');
INSERT INTO `login_log` VALUES (57, 2, '127.0.0.1', '2024-03-04 21:14:05');
INSERT INTO `login_log` VALUES (58, 2, '127.0.0.1', '2024-03-04 21:18:50');
INSERT INTO `login_log` VALUES (59, 2, '127.0.0.1', '2024-03-04 21:58:46');
INSERT INTO `login_log` VALUES (60, 2, '127.0.0.1', '2024-03-04 21:58:49');
INSERT INTO `login_log` VALUES (61, 2, '127.0.0.1', '2024-03-04 22:06:11');
INSERT INTO `login_log` VALUES (62, 2, '127.0.0.1', '2024-03-04 22:06:52');
INSERT INTO `login_log` VALUES (63, 1, '127.0.0.1', '2024-03-08 20:58:38');
INSERT INTO `login_log` VALUES (64, 1, '127.0.0.1', '2024-03-21 22:15:17');
INSERT INTO `login_log` VALUES (65, 2, '127.0.0.1', '2024-03-21 22:35:17');
INSERT INTO `login_log` VALUES (66, 1, '127.0.0.1', '2024-03-21 22:46:54');
INSERT INTO `login_log` VALUES (67, 1, '127.0.0.1', '2024-03-23 17:33:26');
INSERT INTO `login_log` VALUES (68, 1, '127.0.0.1', '2024-03-31 20:03:11');
INSERT INTO `login_log` VALUES (69, 1, '127.0.0.1', '2024-03-31 20:04:35');
INSERT INTO `login_log` VALUES (70, 1, '127.0.0.1', '2024-03-31 21:09:49');
INSERT INTO `login_log` VALUES (71, 1, '127.0.0.1', '2024-03-31 21:13:36');
INSERT INTO `login_log` VALUES (72, 1, '127.0.0.1', '2024-03-31 21:16:31');
INSERT INTO `login_log` VALUES (73, 1, '127.0.0.1', '2024-04-03 20:28:33');
INSERT INTO `login_log` VALUES (74, 1, '127.0.0.1', '2024-04-04 08:53:55');
INSERT INTO `login_log` VALUES (75, 2, '127.0.0.1', '2024-04-26 22:45:40');
INSERT INTO `login_log` VALUES (76, 1, '127.0.0.1', '2024-04-30 20:39:58');
INSERT INTO `login_log` VALUES (77, 2, '127.0.0.1', '2024-04-30 20:45:31');
INSERT INTO `login_log` VALUES (78, 2, '127.0.0.1', '2024-05-10 21:54:32');
INSERT INTO `login_log` VALUES (79, 1, '127.0.0.1', '2024-05-15 23:15:53');
INSERT INTO `login_log` VALUES (80, 1, '127.0.0.1', '2024-05-18 16:16:27');
INSERT INTO `login_log` VALUES (81, 1, '127.0.0.1', '2024-05-23 22:04:25');
INSERT INTO `login_log` VALUES (82, 1, '127.0.0.1', '2024-05-31 21:14:48');
INSERT INTO `login_log` VALUES (83, 3, '127.0.0.1', '2024-06-09 19:48:20');
INSERT INTO `login_log` VALUES (84, 2, '127.0.0.1', '2024-06-09 19:48:51');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `company` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名称',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '留言内容',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '留言' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, '闫宇韬', '13366826071', '天山派', '仰天大笑出门去，我辈岂是蓬蒿人！', '2023-11-25 12:42:23', '2023-11-25 12:42:23');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型名称',
  `table_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型对应的表名',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '1->开启 0->关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '模型字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 'down', 'down', '1');

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '站点id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `domain` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站域名',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `wx` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信',
  `icp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ICP备案号',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点统计代码',
  `json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '万能配置',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `keywords` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面关键词',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面描述',
  `template` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'view模板',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序secret',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, 'ChanCMS', 'www.chancms.top', '867528315@qq.com', NULL, '皖ICP备2024033678号-1', '', '', 'ChanCMS', 'ChanCMS', 'ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', NULL, NULL, NULL, NULL, '2024-03-02 22:22:45');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播图',
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播链接',
  `mark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, '首页', '/public/cover/05.jpg', 'https://www.chancms.top', NULL, '2023-11-05 23:29:14', '2024-04-03 21:39:05');
INSERT INTO `slide` VALUES (2, 'chancms', '/public/uploads/default/2024/03/08/1709902824673_source_1.png.png', 'https://www.chancms.top', NULL, '2024-03-08 21:00:27', '2024-03-31 20:13:15');

-- ----------------------------
-- Table structure for sys_app
-- ----------------------------
DROP TABLE IF EXISTS `sys_app`;
CREATE TABLE `sys_app`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `template` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'default' COMMENT 'view模板名称',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序秘钥',
  `accessKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云ak',
  `secretKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云sk',
  `domain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云域名',
  `bucket` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云bucket',
  `uploadWay` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '上传方式 1->普通 2->七牛云',
  `maxAge` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '静态资源缓存 1开启 2关闭',
  `dataCache` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '全局模板数据缓存 1开启 2关闭',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '应用配置' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_app
-- ----------------------------
INSERT INTO `sys_app` VALUES (1, 'default', 's', 'x', 'test', 'test', 'chancms.top', 'test', '1', '2', '2', '2023-10-07 21:52:21', '2024-06-09 20:03:44');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统内置（Y是 N否）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '菜单配置',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (2, '{\"route\":[{\"path\":\"/home\",\"name\":\"home-info\",\"component\":\"@/views/home/info.vue\",\"meta\":{\"title\":\"网站信息\",\"icon\":\"DataLine\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/site\",\"name\":\"site\",\"meta\":{\"title\":\"站点管理\",\"icon\":\"Monitor\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/site-index\",\"children\":[{\"path\":\"/site-index\",\"name\":\"site-index\",\"component\":\"@/views/home/site.vue\",\"meta\":{\"title\":\"站点设置\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/content\",\"name\":\"content\",\"meta\":{\"title\":\"内容管理\",\"isShow\":true,\"icon\":\"Grid\",\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/category\",\"children\":[{\"path\":\"/category\",\"name\":\"category-index\",\"component\":\"@/views/category/index.vue\",\"meta\":{\"title\":\"栏目管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/add\",\"name\":\"category-add\",\"component\":\"@/views/category/add.vue\",\"meta\":{\"title\":\"栏目管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/edit/:id\",\"name\":\"category-edit\",\"component\":\"@/views/category/edit.vue\",\"meta\":{\"title\":\"页面管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article\",\"name\":\"article-index\",\"component\":\"@/views/article/index.vue\",\"meta\":{\"title\":\"文章管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/add\",\"name\":\"article-add\",\"component\":\"@/views/article/add.vue\",\"meta\":{\"title\":\"文章管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/edit/:id\",\"name\":\"article-edit\",\"component\":\"@/views/article/edit.vue\",\"meta\":{\"title\":\"文章管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide\",\"name\":\"slide-index\",\"component\":\"@/views/slide/index.vue\",\"meta\":{\"title\":\"轮播管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/add\",\"name\":\"slide-add\",\"component\":\"@/views/slide/add.vue\",\"meta\":{\"title\":\"轮播管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/edit/:id\",\"name\":\"slide-edit\",\"component\":\"@/views/slide/edit.vue\",\"meta\":{\"title\":\"轮播管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag\",\"name\":\"tag-index\",\"component\":\"@/views/tag/index.vue\",\"meta\":{\"title\":\"标签管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/add\",\"name\":\"tag-add\",\"component\":\"@/views/tag/add.vue\",\"meta\":{\"title\":\"标签管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/edit/:id\",\"name\":\"tag-edit\",\"component\":\"@/views/tag/edit.vue\",\"meta\":{\"title\":\"标签管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag\",\"name\":\"frag-index\",\"component\":\"@/views/frag/index.vue\",\"meta\":{\"title\":\"碎片管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/add\",\"name\":\"frag-add\",\"component\":\"@/views/frag/add.vue\",\"meta\":{\"title\":\"碎片管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/edit/:id\",\"name\":\"frag-edit\",\"component\":\"@/views/frag/edit.vue\",\"meta\":{\"title\":\"碎片管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/gather\",\"name\":\"gather\",\"meta\":{\"title\":\"采集功能\",\"icon\":\"MagicStick\",\"isShow\":true,\"role\":[\"super\"]},\"redirect\":\"/collect\",\"children\":[{\"path\":\"/collect\",\"name\":\"collect-index\",\"component\":\"@/views/collect/index.vue\",\"meta\":{\"title\":\"页面采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/collect/add\",\"name\":\"collect-add\",\"component\":\"@/views/collect/add.vue\",\"meta\":{\"title\":\"页面采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/collect/:id\",\"name\":\"collect-edit\",\"component\":\"@/views/collect/edit.vue\",\"meta\":{\"title\":\"页面采集-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather\",\"name\":\"gather-index\",\"component\":\"@/views/gather/index.vue\",\"meta\":{\"title\":\"接口采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/gather/add\",\"name\":\"gather-add\",\"component\":\"@/views/gather/add.vue\",\"meta\":{\"title\":\"接口采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather/edit/:id\",\"name\":\"gather-edit\",\"component\":\"@/views/gather/edit.vue\",\"meta\":{\"title\":\"接口采集-更新\",\"isShow\":false,\"role\":[\"super\"]}}]},{\"path\":\"/extend\",\"name\":\"extend\",\"meta\":{\"title\":\"功能管理\",\"icon\":\"Operation\",\"isShow\":true,\"role\":[\"super\",\"admin\",\"editor\"]},\"children\":[{\"path\":\"/model\",\"name\":\"model-index\",\"component\":\"@/views/model/index.vue\",\"meta\":{\"title\":\"模型管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/model/add\",\"name\":\"model-add\",\"component\":\"@/views/model/add.vue\",\"meta\":{\"title\":\"模型管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/edit/:id\",\"name\":\"model-edit\",\"component\":\"@/views/model/edit.vue\",\"meta\":{\"title\":\"模型管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field\",\"name\":\"field-index\",\"component\":\"@/views/field/index.vue\",\"meta\":{\"title\":\"字段管理\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/add\",\"name\":\"field-add\",\"component\":\"@/views/field/add.vue\",\"meta\":{\"title\":\"字段管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/edit\",\"name\":\"field-edit\",\"component\":\"@/views/field/edit.vue\",\"meta\":{\"title\":\"字段管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/friendlink\",\"name\":\"friendlink-index\",\"component\":\"@/views/friendlink/index.vue\",\"meta\":{\"title\":\"友情链接\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/add\",\"name\":\"friendlink-add\",\"component\":\"@/views/friendlink/add.vue\",\"meta\":{\"title\":\"友情链接-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/edit/:id\",\"name\":\"friendlink-edit\",\"component\":\"@/views/friendlink/edit.vue\",\"meta\":{\"title\":\"友情链接-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message\",\"name\":\"message-index\",\"component\":\"@/views/message/index.vue\",\"meta\":{\"title\":\"消息管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/add\",\"name\":\"message-add\",\"component\":\"@/views/message/add.vue\",\"meta\":{\"title\":\"消息管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/edit/:id\",\"name\":\"message-edit\",\"component\":\"@/views/message/edit.vue\",\"meta\":{\"title\":\"消息管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/sys\",\"name\":\"sys\",\"meta\":{\"title\":\"系统管理\",\"isShow\":true,\"icon\":\"Setting\",\"role\":[\"admin\",\"super\"]},\"redirect\":\"/user\",\"children\":[{\"path\":\"/user\",\"name\":\"user-index\",\"component\":\"@/views/user/index.vue\",\"meta\":{\"title\":\"用户管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/add\",\"name\":\"user-add\",\"component\":\"@/views/user/add.vue\",\"meta\":{\"title\":\"用户列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/edit/:id\",\"name\":\"user-edit\",\"component\":\"@/views/user/edit.vue\",\"meta\":{\"title\":\"用户列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role\",\"name\":\"role-index\",\"component\":\"@/views/role/index.vue\",\"meta\":{\"title\":\"角色管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/add\",\"name\":\"role-add\",\"component\":\"@/views/role/add.vue\",\"meta\":{\"title\":\"角色列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/edit/:id\",\"name\":\"role-edit\",\"component\":\"@/views/role/edit.vue\",\"meta\":{\"title\":\"角色列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/menu\",\"name\":\"menu-index\",\"component\":\"@/views/menu/index.vue\",\"meta\":{\"title\":\"菜单管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/loginlog\",\"name\":\"loginLog-index\",\"component\":\"@/views/loginlog/index.vue\",\"meta\":{\"title\":\"登录日志\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}}]}]}', NULL);

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公告状态（0关闭  1正常）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `value` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色值',
  `sort` int(4) NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'super', 0, '1', NULL, '2023-10-30 21:57:52', '2023-10-30 22:00:50');
INSERT INTO `sys_role` VALUES (2, '普通管理员', 'admin', 0, '1', NULL, '2023-10-30 22:01:04', '2023-10-30 22:01:04');
INSERT INTO `sys_role` VALUES (3, '编辑管理', 'editor', 0, '1', NULL, '2023-10-30 22:01:11', '2023-10-30 22:02:14');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `role_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, '1', 'chancms', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:01', '2024-05-31 21:33:11');
INSERT INTO `sys_user` VALUES (2, '1', 'yanyutao', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:18', '2023-10-30 23:55:42');
INSERT INTO `sys_user` VALUES (3, '3', 'chanyue', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-31 00:06:55', '2024-05-31 21:33:36');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'ChanCMS', 'ChanCMS');
INSERT INTO `tag` VALUES (6, 'nodejs', 'nodejs');
INSERT INTO `tag` VALUES (7, 'css', 'css');
INSERT INTO `tag` VALUES (8, 'js', 'js');
INSERT INTO `tag` VALUES (9, 'vue', 'vue');
INSERT INTO `tag` VALUES (10, 'react', 'react');
INSERT INTO `tag` VALUES (11, 'mysql', 'mysql');

SET FOREIGN_KEY_CHECKS = 1;
