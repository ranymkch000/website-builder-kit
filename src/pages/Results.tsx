import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, FileText, Brain } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Results = () => {
  useScrollReveal();
  const location = useLocation();
  const { score = 55, confidence = 82, imageName = "image.jpg" } = (location.state as { score?: number; confidence?: number; imageName?: string }) || {};

  const riskLabel = score >= 70 ? "High" : score >= 50 ? "Moderate" : "Low";
  const riskColor = score >= 70 ? "text-destructive" : score >= 50 ? "text-warning" : "text-success";
  const riskBg = score >= 70 ? "bg-destructive/10" : score >= 50 ? "bg-warning/10" : "bg-success/10";

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-8">
      <Link to="/evaluation">
        <Button variant="ghost" className="gap-2 mb-2 rounded-xl"><ArrowLeft className="w-4 h-4" /> Back to Evaluation</Button>
      </Link>

      <div className="text-center space-y-5 animate-fade-in">
        <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${riskBg}`}>
          <Brain className={`w-8 h-8 ${riskColor}`} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-2">Analysis Complete</p>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">Screening Results</h1>
        </div>
        <p className="text-muted-foreground text-sm">Analysis for: {imageName}</p>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-5 scroll-reveal">
        <h2 className="font-heading text-xl text-foreground">ASD Score</h2>
        <div className="text-center py-4">
          <span className={`text-7xl font-bold font-heading ${riskColor}`}>{score}</span>
          <span className="text-3xl text-muted-foreground font-heading">/100</span>
        </div>
        <Progress value={score} className="h-3 rounded-full" />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Low Risk</span>
          <span className={`font-semibold ${riskColor}`}>{riskLabel} Risk</span>
          <span className="text-muted-foreground">High Risk</span>
        </div>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-5 scroll-reveal">
        <h2 className="font-heading text-xl text-foreground">Confidence Score</h2>
        <div className="text-center py-4">
          <span className="text-7xl font-bold font-heading text-foreground">{confidence}</span>
          <span className="text-3xl text-muted-foreground font-heading">%</span>
        </div>
        <Progress value={confidence} className="h-3 rounded-full" />
        <p className="text-sm text-muted-foreground text-center">
          The model is {confidence}% confident in this prediction.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-4 scroll-reveal">
        <Button variant="outline" className="gap-2 rounded-xl"><FileText className="w-4 h-4" /> Download Report</Button>
        <Link to="/model-performance"><Button variant="outline" className="gap-2 rounded-xl">View Model Metrics</Button></Link>
        <Link to="/dashboard"><Button className="gap-2 rounded-xl">Back to Dashboard</Button></Link>
      </div>

      <p className="text-center text-xs text-muted-foreground">⚠️ This is a decision-support tool and does not constitute a medical diagnosis.</p>
    </div>
  );
};

export default Results;
