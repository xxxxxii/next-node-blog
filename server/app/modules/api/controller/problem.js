const dayjs = require("dayjs");

const Chan = require("chanjs");
let {
  utils: { filterBody },
  api: { success },
} = Chan.helper;

const {
  api: {
    service: { article, problem, category, tag, sysUser, blogCategory },
  },
} = Chan.modules;

class ProblemController {
  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.defaultParams.createdAt = dayjs(body.defaultParams.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      body.defaultParams.updatedAt = dayjs(body.defaultParams.updatedAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      body.defaultParams.content = filterBody(body.defaultParams.content);
      const data = await article.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await article.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format("YYYY-MM-DD HH:mm:ss");
      body.updatedAt = dayjs(body.updatedAt).format("YYYY-MM-DD HH:mm:ss");
      body.content = filterBody(body.content);
      const data = await article.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async find(req, res, next) {
    try {
      const data = await article.find();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await article.detail(id);

      const cData = await category.findId(data?.cid);
      data["category"] = cData || {};

      const uData = await sysUser.detail(data?.user_id);
      data["users"] = uData || {};

      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查子栏目
  static async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await article.findSubId(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const { cur, keyword, cid = 0, pageSize = 20 } = req.query;
      const data = await article.search(keyword, cur, pageSize, +cid);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm:ss");
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur || 1;
      const cid = req.query.cid;
      const sort = req.query.sort;
      const pageSize = req.query.pageSize || 10;
      const data = await problem.list(cur, pageSize, cid, sort);
      let tagData = await blogCategory.find();
      let tags = [];
      for (let j = 0; j < tagData.length; j++) {
        let child = await blogCategory.findTree(tagData[j]?.id);
        tags.push(...child);
      }

      for (let i = 0; i < data.list.length; i++) {
        data.list[i]["user"] = await sysUser.detail(data.list[i]?.author);
        data.list[i]["answer"] = [
          await sysUser.detail(data.list[i]?.answer_id),
        ];
        let tagTemp = data.list[i]["tag"].split(",");

        let tagList = [];
        tagTemp?.forEach((item) => {
          let cTag = tags.filter((ic) => ic?.id == item);
          cTag.length > 0 && tagList.push(cTag[0]);
        });
        data.list[i]["tagList"] = tagList;
      }

      console.log(data, "data");
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 上传图片
  static async upload(req, res, next) {
    try {
      let file = req.files;
      const { originalname, filename, path } = file[0];
      res.json({
        ...success,
        data: {
          link: path.replace("app", ""),
          domain: req.hostname,
          originalname,
          filename,
          path: "/" + path.replace(/\\/g, "/").replace(/^app\//, ""),
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async findField(req, res, next) {
    try {
      const cid = req.query.cid;
      const data = await article.findField(cid);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  static async tongji(req, res, next) {
    try {
      const {
        config: { version, appName, port, versionTime, author },
      } = req.app.locals;
      const data = await article.tongji();
      res.json({
        ...success,
        data: { ...data, version, appName, port, versionTime, author },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProblemController;
