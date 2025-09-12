import { AppSidebar } from "@/components/AppSideBar/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { IChildrenReactElement } from "@/lib/types";

export default function Layout({ children }: IChildrenReactElement) {
  return (
    /*  <SidebarProvider className="min-h-[90vh]">
      <AppSidebar />
      <main className="w-full min-h-screen sm:mt-16">{children}</main>
    </SidebarProvider> */
    <SidebarProvider className="flex flex-1">
      <AppSidebar />
      <main className="flex-1 min-h-0 overflow-auto sm:mt-16">
        <div className="p-4 sm:p-6 pb-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
