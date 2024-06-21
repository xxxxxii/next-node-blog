<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="bg-fff pd-20 radius-6 row justify-around mb-20">
        <router-link class="c-1d2129" to="/article">
          <div class="row flex-col align-c">
            <div class="tj-img">
              <img src="@/assets/img/ico-article.svg" />
            </div>
            <p class="f-12 text-c mt-5">文章内容</p>
            <p class="f-20 text-c">
              {{ data.article }} <sub class="pos-r t-0 f-12">篇</sub>
            </p>
          </div>
        </router-link>

        <router-link class="c-1d2129" to="/tag">
          <div class="row flex-col align-c">
            <div class="tj-img">
              <img src="@/assets/img/ico-will.svg" />
            </div>
            <p class="f-12 text-c mt-5">文章标签</p>
            <p class="f-20 text-c">
              {{ data.tag }} <sub class="pos-r t-0 f-12">个</sub>
            </p>
          </div>
        </router-link>

        <router-link class="c-1d2129" to="/message">
          <div>
            <div class="tj-img">
              <img src="@/assets/img/ico-message.svg" />
            </div>
            <p class="f-12 text-c mt-5">留言信息</p>
            <p class="f-20 text-c">
              {{ data.message }} <sub class="pos-r t-0 f-12">条</sub>
            </p>
          </div>
        </router-link>
        <div>
          <div class="tj-img">
            <img src="@/assets/img/ico-up.svg" />
          </div>
          <p class="f-12 text-c mt-5">七日更新</p>
          <p class="f-20 text-c">
            {{ data.week }} <sub class="pos-r t-0 f-12">条</sub>
          </p>
        </div>
      </div>

      <div class="row">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="bg-fff pd-20 radius-6 mb-20 row chart">
              <qiun-vue-ucharts
                type="ring"
                :opts="opts"
                :chartData="chartData"
              />
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="bg-fff pd-20 radius-6 mb-20">
              <div class="mb-12 f-16 c-1d2129 bold">系统特色</div>
              <p class="f-13 mb-6 c-4e5969">
                ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。
              </p>
              <p class="f-13 mb-6 c-4e5969">轻量、灵活、稳定、高性能。</p>
              <p class="f-13 mb-6 c-4e5969">
                <strong>SEO。</strong
                >专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                <strong>安全。</strong
                >基于knex,高防sql注入，接口权限校验，为安全提供保障。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                <strong>灵活</strong
                >。碎片功能，支持零碎文案配置，方便各类灵活文案配置。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                <strong>高扩展。</strong
                >支持扩展模型，字段配置，可动态生成表，超强扩展。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                <strong>模块化。</strong>一切模块相互独立，互不干扰。
              </p>
              <p class="f-13 c-4e5969">
                <strong>插件化。</strong>灵活开发，支持完整功能模块。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="bg-fff pd-20 radius-6 mb-20">
        <div class="mb-12 f-16 c-1d2129 bold">技术架构</div>
        <p class="f-13 mb-6 c-4e5969">
          <span class="c-333">服务架构：</span>nodejs express mysql
        </p>
        <p class="f-13 mb-6"><span>前端架构：</span>vite vue3 element-plus</p>
        <p class="f-13 mb-6"><span>程序路径：</span>{{ dirname }}</p>
        <p class="f-13 mb-6"><span>程序版本：</span>{{ data.version }}</p>
        <p class="f-13 mb-6"><span>发布时间：</span>{{ data.versionTime }}</p>
        <p class="f-13 mb-6"><span>技术开发：</span>{{ data.author }}</p>
        <p class="f-13 mb-6 row"><span>联系微信：</span>yanyutao2014</p>
        <p class="f-13 mb-6 row"><span>联系邮箱：</span>867528315@qq.com</p>
      </div>

      <div class="bg-fff pd-20 radius-6 mb-20">
        <div class="mb-12 f-16 c-1d2129 bold">技术服务</div>
        <p class="f-13 mb-6 c-4e5969 row justify-around">
          <span class="c-1d2129 col-12 mb-10">企业建站</span>
          <span class="c-1d2129 col-12 mb-10">模板开发</span>
          <span class="c-1d2129 col-12 mb-10">模板仿站</span>
          <span class="c-1d2129 col-12 mb-10">模板定制</span>
          <span class="c-1d2129 col-12">小程序开发</span>
          <span class="c-1d2129 col-12">前端开发</span>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { tongji } from "@/api/article.js";
import { runEnv } from "@/api/site.js";
import qiunVueUcharts from "@qiun/vue-ucharts";
import { setCookie } from "@/utils/tool";
export default {
  name: "home-info",
  components: {
    qiunVueUcharts,
  },
  data: () => {
    return {
      data: {
        week: 0,
        message: 0,
        tag: 0,
        article: 0,
        version: "v.1.6.0",
        appName: "ChanCMS",
        port: "",
        versionTime: "",
        author: "",
      },
      dirname: "",
      loading: true,
      chartData: {},
      opts: {
        rotate: false,
        rotateLock: false,
        color: [
          "#FADC19",
          "#9FDB1D",
          "#00B42A",
          "#3491FA",
          "#165DFF",
          "#722ED1",
        ],
        padding: [5, 5, 5, 5],
        dataLabel: true,
        enableScroll: false,
        legend: {
          show: true,
          position: "right",
          lineHeight: 25,
        },
        title: {
          name: "ChanCMS",
          fontSize: 15,
          color: "#666666",
        },
        subtitle: {
          name: "架构",
          fontSize: 25,
          color: "#7cb5ec",
        },
        extra: {
          ring: {
            ringWidth: 60,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 3,
            borderColor: "#FFFFFF",
          },
        },
      },
      //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
    };
  },
  computed: {},
  created() {
    this.chart();
  },
  mounted() {
    this.tongji();
    this.runEnv();
  },

  methods: {
    async tongji() {
      try {
        let res = await tongji();
        if (res.code === 200) {
          this.data = res.data;
          this.loading = false;
        } else {
          this.$message({
            message: res.msg,
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async runEnv() {
      try {
        let res = await runEnv();
        const { code, data } = res;
        if (code === 200) {
          this.dirname = data.dirname;
        } else {
          this.$message({
            message: res.msg,
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    chart() {
      let res = {
        series: [
          {
            data: [
              { name: "nodejs", value: 40 },
              { name: "mysql", value: 10 },
              { name: "vue3", value: 40 },
              { name: "javascript", value: 90 },
              { name: "css3", value: 10 },
              { name: "html5", value: 10 },
            ],
          },
        ],
      };
      this.chartData = JSON.parse(JSON.stringify(res));
    },
  },
};
</script>
<style scoped>
.radius-6 {
  border-radius: 6px;
}

.c-9ca4bf {
  color: #9ca4bf;
}

.chanyue-title,
.chanyue-author,
.chanyue-txt {
  font-family: "chanyue";
}

.tj-img {
  width: 54px;
  height: 54px;
  background-color: #f2f3f5;
  border-radius: 50%;
}

.chart {
  max-width: calc(50vw - 45px);
  height: 330px;
}

@media only screen and (max-width: 992px) {
  .chart {
    max-width: calc(100vw - 45px);
    height: 320px;
  }
}
</style>
