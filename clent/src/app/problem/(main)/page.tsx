import axios from "@axios";
import type { response } from "@type/common/response";
import type { ProblemAttributes } from "@type/model-attribute";
import Head from "@/components/next/Head";
import ProblemList from "@/components/page/problem/ProblemList";
import { getProblemListApi } from "@/api/module/problem";

function getProblemList(page: number, type: "create_time" | "view_count") {
  return getProblemListApi({ page: page, sort: type })
    .then((res) => res.data.data)
    .catch((err) => null);
  axios
    .get<response<{ total: number; list: ProblemAttributes[] }>>(
      `/problem/page/${page}`,
      {
        params: { type: type },
      }
    )
    .then((res) => res.data.data)
    .catch((err) => null);
}

const Problem = async () => {
  let response = (await getProblemList(1, "create_time")) as {
    total: number;
    list: ProblemAttributes[];
  };

  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_SITE_NAME}-技术问答`}
        description={`${process.env.NEXT_PUBLIC_SITE_NAME}是面向中文开发者的技术内容分享与交流平台。我们通过技术文章、问答服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。`}
        keywords={[
          process.env.NEXT_PUBLIC_SITE_NAME,
          "技术社区,博客,前端开发,WEB,技术问答",
        ]}
      />
      <ProblemList {...response} />
    </>
  );
};
export default Problem;
