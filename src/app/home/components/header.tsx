"use client";

import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./../../../components/ui/sidebar";

const items = [
  { title: "Home", url: "/home" },
  { title: "Explore", url: "/explore" },
  { title: "My Orders", url: "/orders" },
  { title: "Account", url: "/account" },
];

export function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const isActive = (url: string) => pathname.startsWith(url);

  if (!isMobile) {
    return (
      <header
        className="top-0 z-50 w-screen overflow-hidden border-b bg-white w-full
      "
      >
        <nav className="flex h-20 items-center justify-between px-4 sm:px-8 box-border">
          <div className="flex-shrink-0">
            <Image
              src="/Chuks-Kitchen.svg"
              alt="ChuksKitchenLogo"
              width={150}
              height={34}
              className="w-auto h-auto"
            />
          </div>

          <div
            className="flex  flex-shrink-1 gap-10 max-w-full
          "
          >
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`text-base font-medium transition-colors ${
                  isActive(item.url)
                    ? "text-[#FF7A18] font-semibold"
                    : "text-[#1F2937] hover:text-[#FF7A18]"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0">
            <Button
              asChild
              className="bg-[#FF7A18] hover:bg-[#E56D0F] text-white border-none rounded-lg px-4 sm:px-6 h-10 sm:h-12 text-sm sm:text-base font-medium flex-shrink-1"
            >
              <Link href="/auth">Login</Link>
            </Button>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-screen overflow-hidden border-b bg-white">
        <nav className="flex h-20 items-center justify-between px-4 sm:px-8 box-border">
          <div className="flex-shrink-0">
            <Image
              src="/Chuks-Kitchen.svg"
              alt="ChuksKitchenLogo"
              width={150}
              height={34}
              className="w-auto h-auto"
            />
          </div>
          <SidebarTrigger className="ml-auto" />
        </nav>
      </header>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={
                          isActive(item.url)
                            ? "text-[#FF7A18] font-semibold"
                            : ""
                        }
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <Button asChild className="w-full">
              <Link href="/auth">Login</Link>
            </Button>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
