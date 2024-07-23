"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Icon from "../../ui/icon";

interface ContentProps {
  pathname?: string;
  route?: string;
  fill?: ReactNode;
  outline: ReactNode;
  title: string;
}

const Content: FC<ContentProps> = ({
  pathname,
  route,
  fill,
  outline,
  title,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="select-none md:pointer-events-none">
              <Icon>
                {pathname && route
                  ? pathname === route
                    ? fill
                    : outline
                  : outline}
              </Icon>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <p className="pointer-events-none select-none whitespace-nowrap text-xl leading-none transition-opacity duration-200 max-md:opacity-0">
        {title}
      </p>
    </>
  );
};

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
          <Content
            pathname={pathname}
            route={route}
            fill={fill}
            outline={outline}
            title={title}
          />
        </Link>
      ) : (
        <button className="flex items-center gap-x-4">
          <Content outline={outline} title={title} />
        </button>
      )}
    </li>
  );
};

export default SidebarItem;
