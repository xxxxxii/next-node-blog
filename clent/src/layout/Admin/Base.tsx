import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "@axios";
import Footer from "@/components/admin/common/Footer";
import Header from "@/components/admin/common/Header";
import Head from "@/components/next/Head";
import useUserData from "@/store/user/user-data";
import AntBase from "@/components/AntBase";
import cookie from "js-cookie";

interface propsType {
  children: ReactNode;
}
axios.interceptors.request.use(
  (config: any) => {
    config.headers["isadmin"] = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const AdminLayout: FC<propsType> = ({ children }) => {
  const router = useRouter();
  let userData = useUserData((s) => s.data);
  console.log(cookie.get("token"), "userData");
  if (typeof window !== "undefined" && !cookie.get("token")) {
    router.replace("/admin/login");
  }

  return (
    <>
      <AntBase>
        <Head title={`${process.env.NEXT_PUBLIC_SITE_NAME} - 后台管理系统`} />
        <style jsx global>{`
          a {
            color: inherit !important;
          }
        `}</style>
        <div className="flex justify-between">
          <Header />
          <main className="relative top-4 ml-[192px] min-h-screen w-full flex-1 pl-4 pr-4">
            {children}
          </main>
        </div>
        <Footer />
      </AntBase>
    </>
  );
};
export default AdminLayout;
