import type { FC } from "react";
import Link from "next/link";
import dayjs from "@dayjs";
import type { ArticleAttributes } from "@type/model-attribute";
import FollwoButton from "@/components/page/article/UserData/FollowButton";

interface propsType {
  data: Pick<ArticleAttributes, "users" | "createdAt" | "pv" | "id">;
  type: "article" | "problem";
}

/** 文章页面作者信息展示*/
const ArticleUserData: FC<propsType> = ({ data, type }) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`/user/${data?.users?.id}`}>
            <img
              src={data?.users?.avatar_url}
              alt={`作者${data?.users?.username}头像`}
              className="h-[30px] w-[30px] cursor-pointer rounded-full"
            />
          </Link>
          <div className="ml-2">
            <div>{data?.users?.username}</div>
            <div>
              <time>
                {dayjs(data.createdAt).format("YYYY年MM月DD日 HH:mm")}
              </time>
              <span> · 阅读数 {data?.pv}</span>
            </div>
          </div>
        </div>
        <FollwoButton
          type={type}
          articleID={data.id}
          bloggerID={data?.users?.id}
        />
      </div>
    </>
  );
};
export default ArticleUserData;
