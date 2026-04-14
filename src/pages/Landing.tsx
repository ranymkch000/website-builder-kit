import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, ShieldCheck, FileText, Activity, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import neuronsBg from "@/assets/neurons-bg.png";

const features = [
  { icon: Brain, title: "AI-Powered Screening", desc: "Deep learning models analyze facial images for early ASD risk detection." },
  { icon: Sparkles, title: "Explainable Results", desc: "Transparent predictions with ASD score and confidence metrics." },
  { icon: Activity, title: "Model Performance", desc: "Full diagnostic curves, confusion matrices, and evaluation metrics." },
  { icon: FileText, title: "Report Generation", desc: "Generate professional PDF reports for clinical documentation and referrals." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Role-based access control with data anonymization and encryption." },
];

const Landing = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Clinical AI Platform</p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                  Early Autism<br />
                  Screening,<br />
                  <span className="text-gradient">Powered by AI</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in opacity-0 [animation-delay:150ms]">
                A clinical decision-support tool for healthcare professionals. Image-based ASD risk assessment using deep learning.
              </p>
              <div className="flex gap-3 pt-2 animate-fade-in opacity-0 [animation-delay:300ms]">
                <Link to="/evaluation">
                  <Button size="lg" className="gap-2 rounded-xl px-6 h-12 text-sm font-semibold hover-glow">
                    Start Screening <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/what-is-asd">
                  <Button size="lg" variant="outline" className="rounded-xl px-6 h-12 text-sm font-semibold hover-lift">Learn About ASD</Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground/60 animate-fade-in opacity-0 [animation-delay:400ms]">
                Decision-support tool only — does not replace clinical diagnosis.
              </p>
            </div>
            <div className="animate-scale-in opacity-0 [animation-delay:200ms]">
              <Brain3D />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-5xl" />

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-14 scroll-reveal">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Platform Features</h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">Everything you need for comprehensive autism screening.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="modern-card hover-lift rounded-2xl p-6 space-y-4 scroll-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-5xl" />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6 scroll-reveal">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Ready to Start Screening?</h2>
            <p className="text-muted-foreground text-lg">Upload an image and get an AI-powered ASD risk assessment in seconds.</p>
            <Link to="/evaluation">
              <Button size="lg" className="gap-2 rounded-xl px-6 h-12 text-sm font-semibold mt-2 hover-glow">
                Start Evaluation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/60">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-heading font-bold text-base text-foreground tracking-tight">
            <span className="text-gradient font-extrabold italic">Auti</span>Vision
          </span>
          <p className="text-xs">© 2026 — Decision support tool. Not a medical diagnosis.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
