import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Menu,
  ChevronLeft,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  role?: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { title: "Dashboard", role: "admin", href: "/", icon: LayoutDashboard },
  { title: "Users", role: "admin", href: "/users", icon: Users },
  { title: "Posts", role: "admin", href: "/posts", icon: FileText },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const [open, setOpen] = React.useState(true); // desktop only

  return (
    <>
      {/* 1. Mobile hamburger */}
      <div className="fixed left-4 top-4 z-40 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent items={navItems} className="pt-14" />
          </SheetContent>
        </Sheet>
      </div>

      {/* 2. Desktop collapsible sidebar */}
      <aside
        className={cn(
          "hidden md:flex h-screen flex-col border-r bg-card transition-all",
          open ? "w-64" : "w-16"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className=" flex items-center gap-1.5 overflow-hidden">
            <img src="/images/logo.png" alt="logo" className="h-8 w-8" />{" "}
            <span className={cn(
              "text-xl font-semibold font-serif whitespace-nowrap transition-all duration-300",
              open ? "opacity-100 " : "opacity-0"
            )}>
              Vendor Verse
            </span>
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                !open && "rotate-180"
              )}
            />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3">
          <SidebarContent items={navItems} collapsed={!open} />
        </ScrollArea>
      </aside>
    </>
  );
}

/* Re-usable menu list */
type SidebarContentProps = {
  items: NavItem[];
  className?: string;
  collapsed?: boolean;
};

function SidebarContent({ items, className, collapsed }: SidebarContentProps) {
  return (
    <nav className={cn("flex flex-col gap-2", className)}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className={cn("justify-start", collapsed && "justify-center px-2")}
          asChild
        >
          <a href={item.href}>
            <item.icon className={cn("h-5 w-5", !collapsed && "mr-2")} />
            {!collapsed && <span>{item.title}</span>}
          </a>
        </Button>
      ))}
    </nav>
  );
}
