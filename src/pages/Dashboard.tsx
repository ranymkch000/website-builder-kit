import { Users, ClipboardList, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import RiskBadge from "@/components/RiskBadge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const recentEvals = [
  { patient: "Patient #1042", age: 4, date: "Mar 28, 2026", risk: "low" as const, confidence: 92 },
  { patient: "Patient #1041", age: 3, date: "Mar 27, 2026", risk: "high" as const, confidence: 87 },
  { patient: "Patient #1040", age: 5, date: "Mar 26, 2026", risk: "moderate" as const, confidence: 78 },
  { patient: "Patient #1039", age: 2, date: "Mar 25, 2026", risk: "low" as const, confidence: 95 },
  { patient: "Patient #1038", age: 4, date: "Mar 24, 2026", risk: "high" as const, confidence: 84 },
];

const Dashboard = () => {
  useScrollReveal();
  return (
  <div className="container mx-auto px-4 py-8 space-y-8">
    <div>
      <h1 className="font-heading text-3xl font-bold text-foreground animate-fade-in">Dashboard</h1>
      <p className="text-muted-foreground mt-1">Overview of screening activity</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Users} title="Total Patients" value={248} subtitle="+12 this month" />
      <StatCard icon={ClipboardList} title="Evaluations" value={1024} subtitle="+38 this week" iconClassName="bg-secondary/10 text-secondary" />
      <StatCard icon={AlertTriangle} title="High Risk" value={42} subtitle="17% of total" iconClassName="bg-destructive/10 text-destructive" />
      <StatCard icon={CheckCircle} title="Low Risk" value={156} subtitle="63% of total" iconClassName="bg-success/10 text-success" />
    </div>

    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Recent Evaluations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Age</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Risk Level</th>
                <th className="pb-3 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {recentEvals.map((e, i) => (
                <tr key={i} className="border-b border-border last:border-0 animate-fade-in opacity-0" style={{ animationDelay: `${i * 80}ms` }}>
                  <td className="py-3 font-medium text-foreground">{e.patient}</td>
                  <td className="py-3 text-muted-foreground">{e.age} yrs</td>
                  <td className="py-3 text-muted-foreground">{e.date}</td>
                  <td className="py-3"><RiskBadge level={e.risk} /></td>
                  <td className="py-3 text-muted-foreground">{e.confidence}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Dashboard;
