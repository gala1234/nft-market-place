import React from "react";

interface MdxLayoutProps {
  children: React.ReactNode;
}

export default function MdxLayout({ children }: MdxLayoutProps) {
  return <div className="max-w-[1248px] mx-auto px-6">{children}</div>;
}
