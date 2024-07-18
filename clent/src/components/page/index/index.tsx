"use client";

import { useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Spin, message } from "antd";
import Main from "@/layout/Main";
import ArticleList from "@/components/common/ArticleList";
import SortSelect from "@/components/page/index/SortSelect";
import TypeHeader from "@/components/page/index/TypeHeader";
import { getPosts } from "@/api/module/posts";

interface optionType {
  type?: number | string;
  tag?: number | string;
  follow?: true;
  sort: sortType;
}

interface propsType {
  type: typeTreeRsponseType[];
  article_list: articleListResponseType;
  children: ReactNode;
}
const Home: FC<propsType> = (props) => {
  /** 文章总数*/
  let [total, setTotal] = useState(props.article_list?.count);
  /** 文章数据信息*/
  let [list, setList] = useState<any>(props.article_list?.list);
  /** 判断是否在加载中*/
  const [isLoading, setIsLoading] = useState(false);

  let page = useRef(1);
  let option = useRef<optionType>({ sort: "createdAt" });

  /** 取消请求函数，每次请求数据时设置上，下次请求时运行*/
  let cancel = useRef<() => void>();
  function loadMoreData() {
    cancel.current && cancel.current();
    if (page.current == 1) setIsLoading(true);

    console.log(page.current, option.current, "option.current");

    getPosts(
      {
        cur: page.current,
        sort: option.current?.sort,
        cid: option.current?.tag,
      },
      (cancelFunction) => {
        cancel.current = cancelFunction;
      }
    )
      .then((data) => {
        let newList = data.list;

        if (page.current == 1) {
          setList(newList);
        } else {
          setList([...list, ...data.list]);
        }
        setTotal(data.count);
        console.log(total, "data?.count");
      })
      .catch(() => {
        message.error("请求错误");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <TypeHeader
        data={props.type}
        change={({ type, tag, follow }) => {
          option.current.tag = tag;
          option.current.type = type;
          option.current.follow = follow;
          page.current = 1;
          loadMoreData();
        }}
      />
      <Main>
        <div className="mr-4 w-[calc(100%-256px)] sm:mr-0 sm:w-full">
          <SortSelect
            change={(sort) => {
              option.current.sort = sort as sortType;
              page.current = 1;
              loadMoreData();
            }}
          />
          <Spin tip="加载中..." spinning={isLoading}>
            <ArticleList
              list={list}
              total={total}
              className="w-full shadow-sm"
              loadMoreData={() => {
                // loadMore();
                // return;
                page.current++;

                loadMoreData();
              }}
            />
          </Spin>
        </div>
        {props.children}
      </Main>
    </>
  );
};

export default Home;
