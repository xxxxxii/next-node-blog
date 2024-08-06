import { cookies, headers } from "next/headers";
import axios from "@axios";
import readingRecords from "@/common/modules/readingRecords";
import HightLight from "@/layout/Content/HightLight";
import ProblemDetail from "@/components/page/problem/ProblemDetail";
import { getProblemListApi } from "@/api/module/problem";

const Problem = async ({ params: { id } }: { params: { id: string } }) => {
  const cookie = cookies();
  const header = headers();
  const token = cookie.get("token");

  let data = await getProblemListApi({ cid: id, sort: "create_time" })
    .then((res) => res.data.data?.list[0])
    .catch((err) => null);
  // await axios(`/problem/${id}`, {
  //   headers: { authorization: token?.value },
  // })
  //   .then((res) => res.data.data)
  //   .catch((err) => null);

  if (!data) {
    new Response(undefined, { status: 404 });
  } else {
    readingRecords(header, id, "problem");
  }

  return (
    <>
      {data.language && <HightLight language={data.language} />}
      <meta name="referrer" content="never"></meta>
      <ProblemDetail data={data} />
    </>
  );
};
export default Problem;
