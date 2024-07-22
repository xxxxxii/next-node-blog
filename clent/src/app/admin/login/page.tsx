"use client";

import { useRouter } from "next/navigation";
import { Button, Form, Input, message } from "antd";
import axios from "@axios";
import cookie from "js-cookie";
import Footer from "@/components/admin/common/Footer";
import Head from "@/components/next/Head";
import useUserData from "@/store/user/user-data";
import AntBase from "@/components/AntBase";
import { Suspense, useEffect, useState } from "react";
import Captcha from "@/components/captcha";

// 使用组件时传入需要渲染的HTML字符串
const htmlString = "<p>这是<b>HTML</b>内容</p>";

const LognIn = () => {
  let router = useRouter();
  let setUserData = useUserData((s) => s.setData);

  const [captchaHtml, setCaptchaHtml] = useState("");

  useEffect(() => {
    // 在这里写入组件挂载后需要执行的代码
    console.log("组件已挂载");
    getCaptcha();
    return () => {
      console.log("组件即将卸载");
    };
  }, []); // 传递空数组保证仅在组件挂载时执行

  async function getCaptcha() {
    let res = await axios.get("http://localhost:81/api/captcha");
    setCaptchaHtml(res?.data);
  }

  function onFinish(values: any) {
    axios
      .post("http://localhost:81/api/sysUser/login", values)
      .then((res) => {
        if (res.data.code) {
          message.success(res.data.msg);
          cookie.set("token", res.data.data.token, {
            expires: 365,
            domain: `.${window.location.hostname
              .split(".")
              .slice(-2)
              .join(".")}`,
          });
          setUserData(res.data.data);
          router.replace("/admin");
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        message.error(err.message);
      });
  }

  return (
    <>
      <AntBase>
        <Head
          title={`登录 - ${process.env.NEXT_PUBLIC_SITE_NAME} - 后台管理系统`}
        />
        <div
          className="h-screen"
          style={{ backgroundImage: `url(/image/admin/bg.svg)` }}
        >
          <div className="relative top-20">
            <div className="flex items-center justify-center">
              <img src="/favicon.svg" alt="Logo" className="h-12 w-12" />
              <a
                target="_blank"
                href="https://github.com/Lrunlin/blog"
                className="ml-6 text-3xl font-semibold text-black no-underline hover:text-black"
              >
                {process.env.NEXT_PUBLIC_SITE_NAME}
              </a>
            </div>
            <div className="mt-20 flex justify-center">
              <Form
                className="w-96"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                labelCol={{ span: 4 }}
                colon={false}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    { required: true, message: "请填写用户名" },
                    // { min: 5, max: 30, message: "邮箱的长度在5-30之间" },
                    // { type: "email", message: "请输入正确格式的邮箱" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    { required: true, message: "请填写密码" },
                    // {
                    //   min: 8,
                    //   max: 16,
                    //   message: "密码为8-16位的数字、字母、特殊字符",
                    // },
                    // {
                    //   pattern: /^[a-zA-Z0-9_]{8,16}$/,
                    //   message: "密码格式为数字、字母或下划线",
                    // },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="验证码"
                  name="captcha"
                  rules={[
                    { required: true, message: "请填写验证码" },
                    // {
                    //   min: 8,
                    //   max: 16,
                    //   message: "密码为8-16位的数字、字母、特殊字符",
                    // },
                    // {
                    //   pattern: /^[a-zA-Z0-9_]{8,16}$/,
                    //   message: "密码格式为数字、字母或下划线",
                    // },
                  ]}
                >
                  <div className="flex">
                    <Input />
                    <Suspense>
                      <div
                        className=" cursor-pointer"
                        onClick={() => getCaptcha()}
                      >
                        <Captcha htmlContent={captchaHtml} />
                      </div>
                    </Suspense>
                  </div>
                </Form.Item>

                <Form.Item label=" ">
                  <Button type="primary" htmlType="submit" block>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="fixed bottom-0 w-screen">
            <Footer />
          </div>
        </div>
      </AntBase>
    </>
  );
};
export default LognIn;
