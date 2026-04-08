import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ClipboardList, BarChart3, Menu, Info, BookOpen, HelpCircle, LineChart, Mail, Sun, Moon, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { to: "/", label: "Home", icon: Brain },
  { to: "/what-is-asd", label: "What is ASD?", icon: HelpCircle },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/evaluation", label: "Evaluation", icon: ClipboardList },
  { to: "/results", label: "Results", icon: BarChart3 },
  { to: "/model-performance", label: "Model", icon: LineChart },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-1 group">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight transition-transform group-hover:scale-105">
            <span className="text-primary">auti</span>
            <span className="text-foreground">vision</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl hover:bg-primary/10 transition-colors"
            onClick={toggle}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 transition-colors">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card p-0 border-l border-border">
              <div className="p-6 pb-2">
                <SheetTitle className="font-heading text-xl font-bold">Navigation</SheetTitle>
                <p className="text-sm text-muted-foreground mt-1">Browse the platform</p>
              </div>
              <div className="px-3 py-2 flex flex-col gap-0.5">
                {navItems.map(({ to, label, icon: Icon }) => {
                  const isActive = location.pathname === to;
                  return (
                    <Link key={to} to={to} onClick={() => setOpen(false)}>
                      <button
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </button>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto p-6 border-t border-border">
                <p className="text-xs text-muted-foreground">Clinical decision-support tool</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
