import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, FileText, Activity, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Brain, title: "AI-Powered Screening", desc: "Machine learning models analyze behavioral data for early ASD risk detection." },
  { icon: Sparkles, title: "Explainable Results", desc: "Transparent predictions with detailed explanations of contributing factors." },
  { icon: Activity, title: "Patient Tracking", desc: "Monitor developmental progress over time with comprehensive evaluation history." },
  { icon: FileText, title: "Report Generation", desc: "Generate professional PDF reports for clinical documentation and referrals." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Role-based access control with data anonymization and encryption." },
];

const Landing = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Early Autism Screening.<br />
              Powered by AI.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A clinical decision-support tool for healthcare professionals. Intelligent, evidence-based ASD risk assessment for children.
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/what-is-asd">
                <Button size="lg" variant="outline">Learn About ASD</Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              Decision-support tool only — does not replace clinical diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 scroll-reveal">
            <h2 className="font-heading text-3xl font-bold text-foreground">Platform Features</h2>
            <p className="text-muted-foreground mt-2 max-w-lg">Everything you need for comprehensive autism screening and patient management.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="scroll-reveal border border-border hover:border-foreground/20 transition-colors" style={{ transitionDelay: `${i * 80}ms` }}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded bg-foreground/5 text-foreground flex items-center justify-center">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6 scroll-reveal">
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
      <footer className="py-8">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            <span className="font-heading font-semibold">AutismCare AI</span>
          </div>
          <p>© 2026 — Decision support tool. Not a medical diagnosis.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
