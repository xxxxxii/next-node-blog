<template>
  <div class="mr-10 ml-10 mb-20 pd-20 content-wrap">
    <el-form ref="params" :model="params" label-width="84px">
      <el-form-item label="菜单配置">
        <json-editor-vue
          class="w-p100 vjs-tree"
          v-model="params.content"
          @change="changeJson"
          mode="code"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import JsonEditorVue from "json-editor-vue3";
import { find, update } from "@/api/menu.js";
export default {
  name: "menu-index",
  components: { JsonEditorVue },
  // 注册组件
  data: () => {
    return {
      hasJsonFlag: true,
      val: {},
      params: {
        //接口入参
        id: 0,
        content: {},
      },
    };
  },

  computed: {},
  async mounted() {},

  async created() {
    await this.find();
  },
  unmounted() {},
  methods: {
    changeJson(val) {
      console.log(val);
      console.log(this.params);
    },
    // 文章详情
    async find() {
      try {
        let res = await find();
        if (res.code == 200) {
          const { id, content } = res.data;
          this.params = {
            id,
            content: JSON.parse(content),
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
    //新增
    async update() {
      try {
        const { id, content } = this.params;
        let params = {
          id,
          content: JSON.stringify(content),
        };
        let res = await update(params);
        if (res.code == 200) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.update();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.vjs-tree {
  height: calc(100vh - 300px);
  overflow: auto;
  width: 100%;
}
::v-deep(.jsoneditor-menu) {
  display: none;
}
::v-deep(.jsoneditor-statusbar) {
  display: none;
}
::v-deep(.jsoneditor-outer) {
  border: none;
}
::v-deep(.jsoneditor-vue3 .jsoneditor-menu) {
  display: none;
}
::v-deep(.jsoneditor-vue3 .jsoneditor-statusbar) {
  display: none;
}
::v-deep(.jsoneditor-vue3 .jsoneditor-outer) {
  border: none;
}
::v-deep(.jsoneditor) {
  border: 1px solid #f2f2f2;
}
::v-deep(.jsoneditor-outer.has-main-menu-bar) {
  margin-top: 0;
  padding-top: 0;
}
::v-deep(.ace-jsoneditor .ace_gutter) {
  background-color: #f2f2f2;
}
</style>
