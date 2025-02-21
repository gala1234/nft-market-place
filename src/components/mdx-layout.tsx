import React from "react";

interface MdxLayoutProps {
  children: React.ReactNode;
}

export default function MdxLayout({ children }: MdxLayoutProps) {
  return (
    <div className="max-w-[1248px] mx-auto px-4 md:px-0 py-16">{children}</div>
  );
}
