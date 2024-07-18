import { Badge } from "antd";
import classNames from "classnames";
import Image from "@/components/next/Image";
import userUserCurrentArticleData from "@/store/user/user-current-article-data";
import itemClassName from "./class";
import { Icon } from "@iconify/react";

const Comment = () => {
  let currentArticleData = userUserCurrentArticleData((s) => s.data);

  return (
    <>
      <a className={classNames([itemClassName, "block"])} href="#comment">
        <Badge
          count={currentArticleData.comment_count}
          color="#adb1b8"
          offset={[10, -10]}
        >
          <Icon icon="iconamoon:comment-dots" fontSize={24} />
        </Badge>
      </a>
    </>
  );
};
export default Comment;
