import { supabase } from "../supabase";

export async function tagTree() {
  return supabase.from("type").select();
}

import axios from "@axios";

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export function getTag() {
  return axios.get(baseUrl + "/api/blog/treeTag");
}
