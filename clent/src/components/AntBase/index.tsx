import { type FC, ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

interface propsType {
  children: ReactNode;
}
const AntBase: FC<propsType> = (props) => {
  return (
    <>
      <AntdRegistry>{props?.children}</AntdRegistry>
    </>
  );
};

export default AntBase;
