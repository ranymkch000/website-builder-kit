import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, LayoutDashboard, ClipboardList, BarChart3, Menu, Info, BookOpen, HelpCircle, LineChart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

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

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center">
            <Brain className="w-7 h-7 text-background" />
          </div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">Autivision</span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="p-2">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="font-heading text-lg mb-6">Menu</SheetTitle>
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
