import axios from "@axios";
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export function getProblemListApi(params: object | any) {
  return axios.get(baseUrl + "/api/problem/list", { params: params });
}
