import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, FileText, Activity, ArrowRight, Sparkles } from "lucide-react";
import heroBrain from "@/assets/hero-brain.png";

const features = [
  { icon: Brain, title: "AI-Powered Screening", desc: "Advanced machine learning models analyze behavioral data for early ASD risk detection." },
  { icon: Sparkles, title: "Explainable Results", desc: "Transparent predictions with detailed explanations of contributing factors." },
  { icon: Activity, title: "Patient Tracking", desc: "Monitor developmental progress over time with comprehensive evaluation history." },
  { icon: FileText, title: "Report Generation", desc: "Generate professional PDF reports for clinical documentation and referrals." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Role-based access control with data anonymization and HTTPS encryption." },
];

const Landing = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Brain className="w-4 h-4" /> AI-Assisted Screening
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Early Autism<br />
              <span className="text-primary">Screening</span> Made Smarter
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              AutismCare AI empowers healthcare professionals with intelligent tools for early ASD risk assessment in children.
            </p>
            <div className="flex gap-3">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/evaluation">
                <Button size="lg" variant="outline">Try Evaluation</Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">⚠️ Decision-support tool only — does not replace medical diagnosis.</p>
          </div>
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 animate-pulse-glow">
              <img src={heroBrain} alt="AI brain analysis visualization" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground">Platform Features</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Everything you need for comprehensive autism screening and patient management.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in opacity-0" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="p-6 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl font-bold text-foreground">Ready to Start Screening?</h2>
          <p className="text-muted-foreground">Begin your first patient evaluation with our AI-powered assessment tools.</p>
          <Link to="/evaluation">
            <Button size="lg" className="gap-2">
              Start Evaluation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          <span className="font-heading font-semibold">AutismCare AI</span>
        </div>
        <p>© 2026 — Decision support tool. Not a medical diagnosis.</p>
      </div>
    </footer>
  </div>
);

export default Landing;
