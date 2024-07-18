import { Suspense, useState } from "react";
import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import axios from "@axios";
import type { ArticleAttributes } from "@type/model-attribute";
import { response } from "@type/response";
import readingRecords from "@/common/modules/readingRecords";
import HightLight from "@/layout/Content/HightLight";
import BackTop from "@/components/common/BackTop";
import StyleLink from "@/components/common/Editor/StyleLink";
import Head from "@/components/next/Head";
import Comments from "@/components/page/article/Comments";
import Recommend from "@/components/page/article/Recommend";
import Reprint from "@/components/page/article/Reprint";
import Store from "@/components/page/article/Store";
import ArticleUserData from "@/components/page/article/UserData";
import View from "@/components/page/article/View";
import { getPostsDetails } from "@/api/module/posts";
import { getUserById } from "@/api/module/user";

const Article = async ({ params: { id } }: { params: { id: string } }) => {
  const cookie = cookies();
  const header = headers();
  const token = cookie.get("token");

  let reponse = await Promise.all([
    getPostsDetails({ id: id }).then(async (res: response) => {
      return res.data.data;
    }),
  ]);
  const data = reponse[0];
  console.log(data);
  if (!data) {
    return notFound();
  } else {
    readingRecords(header, id, "article");
  }

  return (
    <>
      <Head
        title={`${data.title}-${process.env.NEXT_PUBLIC_SITE_NAME}`}
        keywords={[process.env.NEXT_PUBLIC_SITE_NAME, "技术文章", "博客社区"]}
        description={data.description}
      />
      <meta name="referrer" content="never"></meta>
      <Store data={data} />
      <StyleLink id={data?.theme_id} />
      {data.language && <HightLight language={data.language} />}
      <article className="w-full break-all bg-white  p-8 sm:p-2 pb-5 shadow-sm">
        <h1 className="text-4xl font-semibold">{data?.title}</h1>
        <ArticleUserData data={data} type="article" />
        <View content={data?.content} />
        <Reprint reprint={data?.reprint} />
      </article>
      <div className="mt-4 bg-white p-8 pb-10 shadow-sm">
        <Suspense>
          <Comments title="评论" />
        </Suspense>
      </div>
      <Suspense>
        <Recommend />
      </Suspense>
      <BackTop />
    </>
  );
};
export default Article;
