import Image from "next/image";
import Link from "next/link";

import {
  AddSquareOutline,
  DiscoveryFill,
  DiscoveryOutline,
  HeartFill,
  HeartOutline,
  HomeFill,
  HomeOutline,
  LogoutOutline,
  SearchOutline,
  UserFill,
  UserOutline,
} from "../../icons";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 z-50 h-screen w-[256px] border-r border-border bg-background shadow-sm max-sm:hidden">
      <nav className="flex h-full flex-col gap-y-10 px-4 py-6">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            priority
            width={156}
            height={32}
          />
        </Link>
        <ul className="flex flex-1 flex-col justify-between pl-4">
          <div className="space-y-8">
            <SidebarItem
              fill={<HomeFill />}
              outline={<HomeOutline />}
              title="Home"
              route="/"
            />
            <SidebarItem outline={<SearchOutline />} title="Search" />
            <SidebarItem
              fill={<DiscoveryFill />}
              outline={<DiscoveryOutline />}
              title="Explore"
              route="/explore"
            />
            <SidebarItem
              fill={<HeartFill />}
              outline={<HeartOutline />}
              title="Saved"
              route="/saved"
            />
            <SidebarItem outline={<AddSquareOutline />} title="Create" />
            <SidebarItem
              fill={<UserFill />}
              outline={<UserOutline />}
              title="Profile"
              route="/profile/my-profile"
            />
          </div>

          <SidebarItem outline={<LogoutOutline />} title="Logout" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
