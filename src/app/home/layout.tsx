import { MainLayout } from "@/src/app/home/components/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
