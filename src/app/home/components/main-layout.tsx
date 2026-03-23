"use client";

import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { Header } from "@/src/app/home/components/header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full h-auto overflow-x-hidden flex-col">
        <Header />
        <main className="w-full h-auto px-4 py-0 md:px-0">{children}</main>
      </div>
    </SidebarProvider>
  );
}
