<template>
  <div class="mb-20 bg-fff pd-20">
    <el-form ref="params" :model="params" label-width="84px">
      <el-form-item
        label="任务名称"
        prop="taskName"
        :rules="[
          {
            required: true,
            message: '请输入任务名称',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="params.taskName"
          placeholder="例：前端库-chat问答"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="接口地址"
        prop="targetUrl"
        :rules="[
          {
            required: true,
            message: '请输入匹配网址',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input class="flex-1" v-model="params.targetUrl"></el-input>
        </div>
      </el-form-item>

      <el-form-item
        label="处理函数"
        prop="parseData"
        :rules="[
          {
            required: true,
            message: '请输入内容字段',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input
            class="flex-1"
            type="textarea"
            :rows="13"
            v-model="params.parseData"
            placeholder="例：.content h4 a"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="getArticle">
            测试
          </el-button>
        </div>
      </el-form-item>

      <el-form-item class="show" label="测试结果">
        <p>标题：{{ article.title }}</p>
        <p>内容：</p>
        <div v-html="article.content"></div>
      </el-form-item>

      <el-form-item
        label="保存栏目"
        prop="cid"
        :rules="[
          {
            required: true,
            message: '请输入保存栏目',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="params.cid" placeholder="例：cid"></el-input>
      </el-form-item>

      <el-form-item
        label="发布状态"
        prop="status"
        :rules="[
          {
            required: true,
            message: '请选择字符集',
            trigger: 'blur',
          },
        ]"
      >
        <el-radio-group v-model="params.status" class="ml-4">
          <el-radio value="1" size="large">草稿</el-radio>
          <el-radio value="2" size="large">发布</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { create, getArticle } from "@/api/gather.js";

export default {
  name: "gather-add",
  data: () => {
    return {
      activeName: "list",
      params: {
        taskName: "",
        targetUrl: "",
        parseData: "",
        status: "1", //是否限制
        cid: 1,
      },
      listPages: [],
      article: {
        title: "",
        content: "",
      },
    };
  },
  computed: {},
  mounted() {},
  async created() {},
  methods: {
    handleAttr(e) {
      console.log("e-->", e);
    },

    handleSubCid(e) {
      console.log("e-->", e);
    },

    async getArticle() {
      try {
        let { targetUrl, parseData } = this.params;
        let res = await getArticle({
          targetUrl,
          parseData,
        });
        if (res.code == 200) {
          this.article = res.data;
          this.$message({
            message: "恭喜你，获取数据成功^_^",
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    //新增
    async create() {
      try {
        let res = await create(this.params);
        if (res.code == 200) {
          this.$message({
            message: "新增成功^_^",
            type: "success",
          });
          this.$router.go(-1);
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

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.create();
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
:deep(.show .el-form-item__content) {
  flex-direction: column;
  align-items: start;
}
</style>
