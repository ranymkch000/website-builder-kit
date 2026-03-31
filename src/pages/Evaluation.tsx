import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";

const questions = [
  "Does the child respond to their name when called?",
  "Does the child make eye contact during interaction?",
  "Does the child point to objects to show interest?",
  "Does the child engage in pretend play?",
  "Does the child show interest in other children?",
  "Does the child bring objects to show to caregivers?",
  "Does the child respond to social smiling?",
  "Does the child use gestures (waving, nodding)?",
  "Does the child show unusual repetitive movements?",
  "Does the child have difficulty with changes in routine?",
];

const Evaluation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (qIdx: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: value }));
  };

  const handleSubmit = () => {
    const yesCount = Object.values(answers).filter((a) => a === "yes").length;
    const risk = yesCount >= 7 ? "low" : yesCount >= 4 ? "moderate" : "high";
    const confidence = 70 + Math.floor(Math.random() * 25);
    navigate("/results", { state: { risk, confidence, answers, age, gender } });
  };

  const currentQs = questions.slice(step * 5, step * 5 + 5);
  const canProceed = step === 0 ? age && gender : currentQs.every((_, i) => answers[step * 5 + i]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="font-heading text-3xl font-bold text-foreground">ASD Screening Evaluation</h1>
      <p className="text-muted-foreground mt-1 mb-8">Complete the behavioral assessment questionnaire</p>

      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2].map((s) => (
          <div key={s} className={`h-2 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>

      {step === 0 && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-heading">Patient Information</CardTitle>
            <CardDescription>Basic demographics for the screening</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Age (years)</Label>
              <Select value={age} onValueChange={setAge}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select age" /></SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
                    <SelectItem key={a} value={String(a)}>{a} years</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select gender" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {step > 0 && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-heading">Behavioral Questions — Part {step}</CardTitle>
            <CardDescription>Observe the child's behavior and answer accordingly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQs.map((q, i) => {
              const idx = step * 5 + i;
              return (
                <div key={idx} className="space-y-2">
                  <Label className="text-sm font-medium">{idx + 1}. {q}</Label>
                  <RadioGroup value={answers[idx] || ""} onValueChange={(v) => handleAnswer(idx, v)} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id={`q${idx}-yes`} />
                      <Label htmlFor={`q${idx}-yes`} className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id={`q${idx}-no`} />
                      <Label htmlFor={`q${idx}-no`} className="cursor-pointer">No</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="sometimes" id={`q${idx}-sometimes`} />
                      <Label htmlFor={`q${idx}-sometimes`} className="cursor-pointer">Sometimes</Label>
                    </div>
                  </RadioGroup>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={() => setStep((s) => s - 1)} disabled={step === 0} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        {step < 2 ? (
          <Button onClick={() => setStep((s) => s + 1)} disabled={!canProceed} className="gap-2">
            Next <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!canProceed} className="gap-2">
            Submit <Send className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Evaluation;
