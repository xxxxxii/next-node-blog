const fs = require("fs");
const path = require("path");
const {
  config,
  knex,
  helper: {
    utils: { filterBody },
    api: { success, fail },
  },
} = require("chanjs");

class OpenController {
  //60秒读懂世界
  static async news60s(req, res, next) {
    const { mode } = req.query;
    try {
      const url = `https://api.qqsuu.cn/api/dm-60s?type=json`;

      if (global.fetch) {
        const result = await fetch(url);
        const { name, time, data } = await result.json();

        if (mode == "api") {
          res.json({
            ...success,
            data: { name, time, data },
          });
        } else {
          res.render(`60s.html`, { name, time, data });
        }
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  //简报
  static async jianbao(req, res, next) {
    try {
      if (global.fetch) {
        const url = `https://api.qqsuu.cn/api/dm-bulletin`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async getIp() {
    try {
      if (global.fetch) {
        const url = `https://qifu-api.baidubce.com/ip/local/geo/v1/district`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async pdf(req, res, next) {
    try {
      let file = req.query.file || "";
      const pdfPath = path.join(__dirname, `../../../${file}`);
      // 检查文件是否存在
      fs.access(pdfPath, fs.constants.R_OK, (err) => {
        if (err) {
          console.error("文件不存在或无法访问:", err);
          res.status(404).send("File not found");
          return;
        }

        // 获取文件大小
        fs.stat(pdfPath, (err, stats) => {
          if (err) {
            console.error("获取文件大小时出错:", err);
            res.status(500).send("Internal Server Error");
            return;
          }

          const totalByte = stats.size;
          let { startByte = 0, endByte = totalByte - 1 } = req.headers.range
            ? parseRange(req.headers.range, totalByte)
            : {};

          // 设置响应头
          res.writeHead(206, {
            "Content-Type": "application/octet-stream",
            "Content-Length": endByte - startByte + 1,
            "Content-Range": `bytes ${startByte}-${endByte}/${totalByte}`,
            "Accept-Ranges": "bytes",
            "Access-Control-Expose-Headers": "Accept-Ranges,Content-Range",
          });

          // 创建可读流并发送数据
          const stream = fs.createReadStream(pdfPath, {
            start: startByte,
            end: endByte,
          });
          stream.pipe(res);
          stream.on("error", (err) => {
            console.error("读取文件时出错:", err);
            res.status(500).send("Internal Server Error");
          });
        });
      });
    } catch (error) {
      // 关闭文件流
      next(error);
    }
  }

  // static async pdf(req, res, next) {
  //   try {
  //     let file = req.query.file || '';
  //     const filePath = path.join(__dirname, `../../../${file}`);
  //     const fileStream = fs.createReadStream(filePath);
  //     res.setHeader('Content-Type', 'application/pdf');
  //     fileStream.pipe(res);
  //     fileStream.on('error', (err) => {
  //       next(err);
  //     });
  //     fileStream.on('end', () => {
  //       res.end();
  //     });
  //   } catch (error) {
  //      // 关闭文件流
  //     next(error);
  //   }
  // }
}

module.exports = OpenController;
