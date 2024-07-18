import axios from "@axios";

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export function getUserById(params: any) {
  return axios.get(baseUrl + "/api/sysUser/detail?id=" + params?.id);
}
