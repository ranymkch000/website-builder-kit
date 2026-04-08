import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl space-y-14">
      <div className="animate-fade-in">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">About</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-tight">About Autivision</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-xl leading-relaxed">
          A clinical decision-support platform for early ASD screening.
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed scroll-reveal">
        <p>
          Autivision is a clinical decision-support platform designed to assist healthcare professionals in the early screening and risk assessment of Autism Spectrum Disorder (ASD) in children.
        </p>
        <p>
          The platform combines standardized behavioral questionnaires with machine learning models to provide transparent, explainable risk assessments. It is not a diagnostic tool — it supports clinicians in identifying children who may benefit from further evaluation.
        </p>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Early identification of ASD is critical for timely intervention. We aim to reduce screening barriers by providing accessible, evidence-based tools that complement clinical expertise. Our goal is to support — never replace — the professional judgment of healthcare providers.
        </p>
      </div>

      <div className="space-y-5 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">How It Works</h2>
        <div className="grid gap-4">
          {[
            { step: "01", title: "Patient Registration", desc: "Enter basic demographic information for the child being screened." },
            { step: "02", title: "Image Upload", desc: "Upload a facial image for the AI model to analyze." },
            { step: "03", title: "AI Analysis", desc: "Our models analyze the image and generate a risk assessment with confidence scores." },
            { step: "04", title: "Clinical Review", desc: "Results are presented with contributing factors for professional interpretation." },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start modern-card hover-lift rounded-xl p-5">
              <span className="text-2xl font-heading text-muted-foreground/40 shrink-0">{item.step}</span>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Privacy & Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          All patient data is handled with strict confidentiality. The platform employs role-based access control, data anonymization, and encrypted communication to protect sensitive health information.
        </p>
      </div>

      <div className="section-divider w-full scroll-reveal" />
      <p className="text-xs text-muted-foreground scroll-reveal">
        This platform is intended for use by qualified healthcare professionals only. It does not constitute a medical diagnosis.
      </p>
    </div>
  );
};

export default About;
