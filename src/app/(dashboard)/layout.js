import { SidebarProvider } from "../components/ui/sidebar";
import { SidebarComponent } from "../components/Sidebar";
import { DynamicBreadcrumbs } from "../components/DynamicBreadcrums";
import { Separator } from "../components/ui/separator";
import { SidebarTrigger, SidebarInset } from "../components/ui/sidebar";
import { Toaster } from "react-hot-toast"
import { sidebarData} from "./rolesData";

export const metadata = {
  title: "FunLab",
  description: "FunLab",
};

export default function RootLayout({
  children,
}) {
  const roleData = sidebarData;

  return (
    <html lang="en">
      <body>
        <Toaster />
        <SidebarProvider>
          <SidebarComponent data={roleData} />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <DynamicBreadcrumbs />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}