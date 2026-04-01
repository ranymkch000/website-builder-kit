import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="container mx-auto px-4 py-16 max-w-2xl space-y-12">
      <div className="animate-fade-in">
        <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">Contact</h1>
        <div className="w-16 h-0.5 bg-foreground mt-4" />
      </div>

      <div className="flex flex-col gap-4 text-muted-foreground scroll-reveal">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-foreground" />
          <span>contact@autivision.ai</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-foreground" />
          <span>Research Lab — University Medical Center</span>
        </div>
      </div>

      <Card className="border-border scroll-reveal">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help?" rows={5} required />
            </div>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="border-t border-border pt-6 scroll-reveal">
        <p className="text-xs text-muted-foreground">
          For urgent clinical inquiries, please contact your healthcare provider directly.
        </p>
      </div>
    </div>
  );
};

export default Contact;
