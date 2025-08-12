import { FC, PropsWithChildren } from "react";

const OutlineButton: FC<PropsWithChildren> = ({ children }) => (
  <button className="px-4 py-3 flex items-center gap-x-2.5 border border-foreground rounded-md">
    {children}
  </button>
);

export default OutlineButton;
