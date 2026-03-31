import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconClassName?: string;
}

const StatCard = ({ title, value, subtitle, icon: Icon, iconClassName }: StatCardProps) => (
  <Card className="animate-fade-in">
    <CardContent className="flex items-center gap-4 p-6">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconClassName ?? "bg-primary/10 text-primary"}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
        {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
    </CardContent>
  </Card>
);

export default StatCard;
