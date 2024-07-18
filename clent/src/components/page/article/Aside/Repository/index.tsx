import type { FC } from "react";
import classNames from "classnames";
import NoFollowLink from "@/components/next/NoFollowLink";
import { Icon } from "@iconify/react";

interface propsType {
  className?: string;
}
/** 侧边栏张贴项目地址的*/
const Repository: FC<propsType> = ({ className }) => {
  return (
    <>
      <div
        className={classNames(["mb-4 flex bg-white p-4 shadow-sm", className])}
      >
        <Icon icon="skill-icons:github-dark" fontSize={50} />

        <NoFollowLink href="https://github.com/Lrunlin/blog" className="ml-2">
          <div className="text-base text-black">项目地址</div>
          <div className="text-gray-700">一个简单的博客社区</div>
        </NoFollowLink>
      </div>
    </>
  );
};
export default Repository;
