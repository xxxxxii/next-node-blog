import type {
  AwaitedReactNode,
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import dayjs from "@dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { articleListItemType } from "@type/model/article-list-item";
import classNames from "classnames";
import Image from "@/components/next/Image";
import Cover from "./Cover";
import style from "./index.module.scss";
import { Icon } from "@iconify/react";

dayjs.extend(relativeTime);
export interface propsType {
  data: any;
  titleKeyword?: (title: articleListItemType["title"]) => ReactNode;
  topRight?: ReactNode;
  className?: string;
}

/**
 * 文章列表组件的单个文章介绍
 * 传递单个文章数据即可
 */
const ArticleItem: FC<propsType> = ({
  data,
  titleKeyword,
  topRight,
  className,
}) => {
  return (
    <li className={classNames("list-none px-5 pt-3", className)}>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[#4e5969]">{data.name}</span>
          <span className={classNames(["text-[#86909c]"])}>
            <span className={classNames([style.adorn])}>
              {dayjs(data.createdAt).fromNow().replace(" ", "")}
            </span>
          </span>
          <span>
            {data.tag
              ?.slice(0, 2)
              .map(
                (
                  item: {
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                  },
                  index: any
                ) => (
                  <a
                    className={classNames(["text-[#86909c]", style.tag])}
                    key={`tag${data.id}${item.name}${index}`}
                    href={`/tag/${item.name}/article`}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                )
              )}
          </span>
        </div>
        {topRight && topRight}
      </div>
      <div className="flex pb-2">
        <div
          className={classNames([
            data.cover_url ? "w-[calc(100%-130px)]" : "w-11/12",
          ])}
        >
          <a
            className="block w-10/12 truncate text-lg font-bold text-[#1d2129]"
            href={`/article/${data.id}`}
            target="_blank"
          >
            {titleKeyword ? titleKeyword(data.title) : data.title}
          </a>
          <a
            href={`/article/${data.id}`}
            className={classNames([
              "mt-1 text-sm text-[#86909c]",
              data.cover_url ? "mr-2 line-clamp-2" : "line-clamp-1",
            ])}
            target="_blank"
          >
            {data.description}
          </a>
        </div>
        {data.cover_url && <Cover cover_url={data.cover_url} />}
      </div>
      <div
        className={classNames(["pb-2", "border-slate-200", "border-b-solid"])}
      >
        <ul
          className={classNames([
            "pl-0",
            "mb-0",
            "text-[13px]",
            "list-none",
            "flex",
            "cursor-pointer",
          ])}
        >
          <li className={classNames(["flex", "items-center"])}>
            <Icon icon="ph:eye" fontSize={16} />
            <span className="ml-1">{data.pv}</span>
          </li>
          <li className={classNames(["flex", "items-center", "mx-3"])}>
            <Icon icon="mdi:comment-question-outline" fontSize={16} />
            <span className="ml-1">{data?.comment_count || 0}</span>
          </li>
          <li className={classNames(["flex", "items-center"])}>
            <Icon icon="iconamoon:like-light" fontSize={16} />

            <span className="ml-1">{data?.likes}</span>
          </li>
        </ul>
      </div>
    </li>
  );
};
export default ArticleItem;
