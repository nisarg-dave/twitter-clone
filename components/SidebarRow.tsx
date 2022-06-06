import React, { SVGProps } from "react";

interface SidebarRowProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SidebarRow({ Icon, title }: SidebarRowProps) {
  return (
    <div className="flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
}

export default SidebarRow;