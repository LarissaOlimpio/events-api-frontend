import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen bg-slate-200">
      <div className="grid h-full w-full md:grid-cols-[40%_60%]">
        <div className="hidden bg-blue-800 md:flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Projeto</h1>
        </div>

        <div className="flex items-center justify-center bg-white px-6 md:px-16">
          {children}
        </div>
      </div>
    </div>
  );
}
