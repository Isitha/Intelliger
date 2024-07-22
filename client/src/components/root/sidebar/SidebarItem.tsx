"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

import Icon from "../../ui/icon";

interface SidebarItemProps {
  fill?: ReactNode;
  outline: ReactNode;
  title: string;
  route?: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ fill, outline, title, route }) => {
  const pathname = usePathname();

  return (
    <li
      className={`${pathname === route ? "font-bold text-primary" : "font-light text-white"}`}
    >
      {route ? (
        <Link href={route} className={"flex items-center gap-x-4"}>
          <div className="pointer-events-none select-none">
            <Icon>{pathname === route ? fill : outline}</Icon>
          </div>
          <p className="pointer-events-none select-none text-xl leading-none transition-opacity duration-200 max-md:opacity-0">
            {title}
          </p>
        </Link>
      ) : (
        <button className="flex items-center gap-x-4">
          <div className="pointer-events-none select-none">
            <Icon>{outline}</Icon>
          </div>
          <p className="pointer-events-none select-none text-xl leading-none transition-opacity duration-200 max-md:opacity-0">
            {title}
          </p>
        </button>
      )}
    </li>
  );
};

export default SidebarItem;
