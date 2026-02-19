"use client";

import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { Header } from "@/src/app/home/components/header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-screen overflow-x-hidden flex-col">
        <Header />
        <main className="mx-auto w-full max-w-4xl px-4 py-8 md:px-0">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
