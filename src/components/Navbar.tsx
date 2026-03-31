import { Link, useLocation } from "react-router-dom";
import { Brain, LayoutDashboard, Users, ClipboardList, BarChart3, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home", icon: Brain },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/patients", label: "Patients", icon: Users },
  { to: "/evaluation", label: "Evaluation", icon: ClipboardList },
  { to: "/results", label: "Results", icon: BarChart3 },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">AutismCare AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to}>
              <Button
                variant={location.pathname === to ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <Link to="/login">
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn className="w-4 h-4" />
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
