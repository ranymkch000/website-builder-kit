import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, FileText, Brain, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import RiskBadge from "@/components/RiskBadge";

const riskDetails = {
  low: {
    icon: CheckCircle,
    iconClass: "text-success",
    message: "The screening suggests a low likelihood of ASD traits. Continue routine monitoring.",
    factors: ["Good eye contact observed", "Responsive to name", "Engages in social play", "Uses gestures appropriately"],
  },
  moderate: {
    icon: AlertCircle,
    iconClass: "text-warning",
    message: "Some ASD indicators were detected. Further professional evaluation is recommended.",
    factors: ["Limited pretend play", "Inconsistent eye contact", "Moderate interest in peers", "Some repetitive behaviors noted"],
  },
  high: {
    icon: AlertTriangle,
    iconClass: "text-destructive",
    message: "Multiple ASD indicators were identified. A comprehensive diagnostic evaluation is strongly recommended.",
    factors: ["Minimal eye contact", "Does not respond to name consistently", "Limited social engagement", "Repetitive movements observed", "Difficulty with routine changes"],
  },
};

const Results = () => {
  const location = useLocation();
  const { risk = "moderate", confidence = 82 } = (location.state as { risk?: "low" | "moderate" | "high"; confidence?: number }) || {};
  const detail = riskDetails[risk];
  const Icon = detail.icon;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl space-y-6">
      <Link to="/evaluation">
        <Button variant="ghost" className="gap-2 mb-2"><ArrowLeft className="w-4 h-4" /> Back to Evaluation</Button>
      </Link>

      <div className="text-center space-y-4 animate-fade-in">
        <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${risk === "low" ? "bg-success/10" : risk === "moderate" ? "bg-warning/10" : "bg-destructive/10"}`}>
          <Icon className={`w-8 h-8 ${detail.iconClass}`} />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Screening Results</h1>
        <RiskBadge level={risk} />
      </div>

      <Card className="animate-fade-in [animation-delay:150ms] opacity-0">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" /> AI Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{detail.message}</p>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Confidence Score</span>
              <span className="font-semibold text-foreground">{confidence}%</span>
            </div>
            <Progress value={confidence} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in [animation-delay:300ms] opacity-0">
        <CardHeader>
          <CardTitle className="font-heading">Contributing Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {detail.factors.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${risk === "low" ? "bg-success" : risk === "moderate" ? "bg-warning" : "bg-destructive"}`} />
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-3 pt-4">
        <Button variant="outline" className="gap-2"><FileText className="w-4 h-4" /> Download Report</Button>
        <Link to="/dashboard"><Button className="gap-2">Back to Dashboard</Button></Link>
      </div>

      <p className="text-center text-xs text-muted-foreground">⚠️ This is a decision-support tool and does not constitute a medical diagnosis.</p>
    </div>
  );
};

export default Results;
