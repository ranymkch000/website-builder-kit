import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, LayoutDashboard, ClipboardList, BarChart3, LogIn, Menu, Info, BookOpen, HelpCircle, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Home", icon: Brain },
  { to: "/about", label: "About", icon: Info },
  { to: "/what-is-asd", label: "What is ASD?", icon: HelpCircle },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/evaluation", label: "Evaluation", icon: ClipboardList },
  { to: "/results", label: "Results", icon: BarChart3 },
  { to: "/model-performance", label: "Model", icon: LineChart },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center">
            <Brain className="w-4 h-4 text-background" />
          </div>
          <span className="font-heading font-semibold text-lg text-foreground tracking-tight">Autivision</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to}>
              <Button
                variant={location.pathname === to ? "default" : "ghost"}
                size="sm"
                className="text-sm"
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/login">
            <Button variant="outline" size="sm" className="gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetTitle className="font-heading text-lg mb-6">Navigation</SheetTitle>
              <div className="flex flex-col gap-1">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <Link key={to} to={to} onClick={() => setOpen(false)}>
                    <Button
                      variant={location.pathname === to ? "default" : "ghost"}
                      className="w-full justify-start gap-3"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Button>
                  </Link>
                ))}
                <div className="border-t border-border my-3" />
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
