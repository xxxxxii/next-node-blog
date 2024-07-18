import axios from "@axios";
import qs from "qs";

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export function getPosts(params: any, cancelCallback?: (cancel: any) => any) {
  const controller = new AbortController();
  cancelCallback && cancelCallback(() => controller.abort());
  return axios
    .get(baseUrl + "/api/article/list", {
      params: params,
      signal: controller.signal,
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return { total: 0, list: [] };
    });
}
export function getPostsDetails(params: object | any) {
  return axios.get(baseUrl + "/api/article/detail?id=" + params?.id);
}
