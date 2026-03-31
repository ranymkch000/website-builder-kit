import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, User } from "lucide-react";
import RiskBadge from "@/components/RiskBadge";

const mockPatients = [
  { id: "P-1042", age: 4, gender: "Male", lastEval: "Mar 28, 2026", risk: "low" as const },
  { id: "P-1041", age: 3, gender: "Female", lastEval: "Mar 27, 2026", risk: "high" as const },
  { id: "P-1040", age: 5, gender: "Male", lastEval: "Mar 26, 2026", risk: "moderate" as const },
  { id: "P-1039", age: 2, gender: "Female", lastEval: "Mar 25, 2026", risk: "low" as const },
  { id: "P-1038", age: 4, gender: "Male", lastEval: "Mar 24, 2026", risk: "high" as const },
  { id: "P-1037", age: 6, gender: "Female", lastEval: "Mar 23, 2026", risk: "low" as const },
];

const Patients = () => {
  const [search, setSearch] = useState("");
  const filtered = mockPatients.filter((p) => p.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground mt-1">Manage and track patient records</p>
        </div>
        <Button className="gap-2"><Plus className="w-4 h-4" /> Add Patient</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search patients..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <Card key={p.id} className="hover:shadow-md transition-shadow animate-fade-in opacity-0" style={{ animationDelay: `${i * 60}ms` }}>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-heading">{p.id}</CardTitle>
                <p className="text-xs text-muted-foreground">{p.gender}, {p.age} years old</p>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Last eval: {p.lastEval}</span>
              <RiskBadge level={p.risk} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Patients;
