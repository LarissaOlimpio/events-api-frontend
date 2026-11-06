import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./SideBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuClick={() => setIsOpen(true)} />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="p-6">{children}</main>
    </div>
  );
}
