import { cn } from "@/lib/utils";

type RiskLevel = "low" | "moderate" | "high";

const riskConfig: Record<RiskLevel, { label: string; className: string }> = {
  low: { label: "Low Risk", className: "bg-success/10 text-success border-success/20" },
  moderate: { label: "Moderate Risk", className: "bg-warning/10 text-warning border-warning/20" },
  high: { label: "High Risk", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

const RiskBadge = ({ level }: { level: RiskLevel }) => {
  const config = riskConfig[level];
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border", config.className)}>
      {config.label}
    </span>
  );
};

export default RiskBadge;
