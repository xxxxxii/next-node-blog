// https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning
"use client";
// 有script标签，防止水合报错
import { type FC } from "react";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import classNames from "classnames";
import styles from "./index.module.scss";

interface prposType {
  content: string;
}
/** 文章页面主题内容显示*/
const View: FC<prposType> = (props) => {
  console.log(props.content);
  const id = "preview-only";

  return (
    <div id="md-content" className={"content-body"}>
      <MdPreview
        editorId={id}
        autoFoldThreshold={100}
        modelValue={props.content}
        className={classNames([styles.mdView])}
      />
    </div>
  );
};
export default View;
