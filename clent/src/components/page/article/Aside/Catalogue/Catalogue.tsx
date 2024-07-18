"use client";
import { useEffect, useRef, useState } from "react";
import { Divider } from "antd";
import classNames from "classnames";
import style from "./index.module.scss";
import TocHelper from "toc-helper";

const Catalogue = () => {
  let [isShrink, setIsShrink] = useState(false);
  let scrollElement = document.documentElement;
  useEffect(() => {
    const scrollSwitch = () => {
      let scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 大于600缩回，小于540伸出
      if (scrollY > 600 && !isShrink) {
        setIsShrink(true);
      }
      if (scrollY < 540 && isShrink) {
        setIsShrink(false);
      }
    };
    window.addEventListener("scroll", scrollSwitch);
    return () => {
      window.removeEventListener("scroll", scrollSwitch);
    };
  }, [isShrink]);

  const ref = useRef(null);
  useEffect(() => {
    // if (ref.current) {
    new TocHelper(ref.current, [
      ,
      {
        contentSelector: "#md-content",
        fixedClassName: ".md-fixed",
      },
    ]);
    // }
  }, []);
  return (
    <div
      className={classNames([
        "sticky mt-2 bg-white shadow-sm duration-200",
        isShrink ? "top-2" : "top-14",
      ])}
    >
      <div className="p-4 pb-0 text-lg">
        <div>目录</div>
        <Divider className="my-2" />
      </div>
      <div
        className={classNames([
          style["article-page-catalogue"],
          "pb-2",
          style.catalog,
        ])}
      >
        <div ref={ref} className={"md-catalog"} />
      </div>
    </div>
  );
};
export default Catalogue;
