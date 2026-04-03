import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, LogIn } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Login = () => {
  useScrollReveal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md modern-card rounded-2xl p-8 space-y-6 scroll-reveal">
        <div className="text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-foreground flex items-center justify-center">
            <Brain className="w-7 h-7 text-background" />
          </div>
          <div>
            <h1 className="font-heading text-2xl text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to access the screening platform</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input id="email" type="email" placeholder="doctor@clinic.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl h-11" />
          </div>
          <Link to="/dashboard">
            <Button className="w-full gap-2 rounded-xl h-11 text-sm font-semibold"><LogIn className="w-4 h-4" /> Sign In</Button>
          </Link>
          <p className="text-center text-xs text-muted-foreground">Healthcare professionals only</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
