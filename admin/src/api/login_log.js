import http from "../utils/http";
import API from "../config/index";

//文章列表
export let list = (cur) => {
  return http({
    url: `${API.BASE_API}/api/loginLog/list?cur=${cur}&pageSize=20`,
    method: "get",
  });
};

//增
export let create = () => {
  return http({
    url: `${API.BASE_API}/api/loginLog/create`,
    method: "post",
  });
};

//删
export let del = (id) => {
  return http({
    url: `${API.BASE_API}/api/loginLog/delete?id=${id}`,
    method: "get",
  });
};
