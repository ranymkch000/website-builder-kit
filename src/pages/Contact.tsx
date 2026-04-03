import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useScrollReveal();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl space-y-14">
      <div className="animate-fade-in">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">Get in Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-tight">Contact</h1>
      </div>

      <div className="flex flex-col gap-4 scroll-reveal">
        {[
          { icon: Mail, text: "contact@autivision.ai" },
          { icon: MapPin, text: "Research Lab — University Medical Center" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-4 modern-card rounded-xl p-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-foreground" />
            </div>
            <span className="text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>

      <div className="modern-card rounded-2xl p-8 scroll-reveal">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Name</Label>
            <Input id="name" placeholder="Your name" required className="rounded-xl h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required className="rounded-xl h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Message</Label>
            <Textarea id="message" placeholder="How can we help?" rows={5} required className="rounded-xl" />
          </div>
          <Button type="submit" className="w-full rounded-xl h-11 text-sm font-semibold" disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>

      <div className="section-divider w-full scroll-reveal" />
      <p className="text-xs text-muted-foreground scroll-reveal">
        For urgent clinical inquiries, please contact your healthcare provider directly.
      </p>
    </div>
  );
};

export default Contact;
