import React, { PropsWithChildren } from "react";

type Props = {
  //
};

const Component: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFF1F2]">{children}</div>
  );
};

export default Component;
