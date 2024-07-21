import { FC, ReactNode } from "react";

import Topbar from "@/components/root/Topbar";
import Bottombar from "@/components/root/Bottombar";
import Sidebar from "@/components/root/Sidebar";
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <section className="flex-1 max-sm:py-9">{children}</section>
      </div>
      <Bottombar />
    </main>
  );
};

export default RootLayout;
