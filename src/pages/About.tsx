import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div className="animate-fade-in">
        <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">About AutismCare AI</h1>
        <div className="w-16 h-0.5 bg-foreground mt-4" />
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed scroll-reveal">
        <p>
          AutismCare AI is a clinical decision-support platform designed to assist healthcare professionals in the early screening and risk assessment of Autism Spectrum Disorder (ASD) in children.
        </p>
        <p>
          The platform combines standardized behavioral questionnaires with machine learning models to provide transparent, explainable risk assessments. It is not a diagnostic tool — it supports clinicians in identifying children who may benefit from further evaluation.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Early identification of ASD is critical for timely intervention. We aim to reduce screening barriers by providing accessible, evidence-based tools that complement clinical expertise. Our goal is to support — never replace — the professional judgment of healthcare providers.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
          <li><strong className="text-foreground">Patient Registration</strong> — Enter basic demographic information for the child being screened.</li>
          <li><strong className="text-foreground">Behavioral Assessment</strong> — Complete a standardized questionnaire based on observed behaviors.</li>
          <li><strong className="text-foreground">AI Analysis</strong> — Our models analyze responses and generate a risk assessment with confidence scores.</li>
          <li><strong className="text-foreground">Clinical Review</strong> — Results are presented with contributing factors for professional interpretation.</li>
        </ol>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Privacy & Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          All patient data is handled with strict confidentiality. The platform employs role-based access control, data anonymization, and encrypted communication to protect sensitive health information.
        </p>
      </div>

      <div className="border-t border-border pt-6 scroll-reveal">
        <p className="text-xs text-muted-foreground">
          This platform is intended for use by qualified healthcare professionals only. It does not constitute a medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default About;
