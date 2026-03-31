import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhatIsASD = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div className="animate-fade-in">
        <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">What is ASD?</h1>
        <div className="w-16 h-0.5 bg-foreground mt-4" />
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed scroll-reveal">
        <p>
          <strong className="text-foreground">Autism Spectrum Disorder (ASD)</strong> is a neurodevelopmental condition characterized by differences in social communication, interaction, and patterns of behavior. It is called a "spectrum" because it manifests differently in every individual, ranging from mild to significant support needs.
        </p>
        <p>
          ASD is not a disease. It is a lifelong condition that affects how a person perceives the world, communicates, and interacts with others. Early identification allows for timely support and intervention, which can significantly improve outcomes.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Key Characteristics</h2>
        <div className="space-y-3 text-muted-foreground">
          <div className="border-l-2 border-foreground/20 pl-4">
            <strong className="text-foreground">Social Communication</strong>
            <p className="text-sm mt-1">Difficulty with back-and-forth conversation, understanding nonverbal cues, or developing and maintaining relationships.</p>
          </div>
          <div className="border-l-2 border-foreground/20 pl-4">
            <strong className="text-foreground">Restricted Interests</strong>
            <p className="text-sm mt-1">Intense focus on specific topics, adherence to routines, or repetitive patterns of behavior.</p>
          </div>
          <div className="border-l-2 border-foreground/20 pl-4">
            <strong className="text-foreground">Sensory Differences</strong>
            <p className="text-sm mt-1">Over- or under-sensitivity to sensory input such as sounds, textures, lights, or tastes.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Prevalence</h2>
        <p className="text-muted-foreground leading-relaxed">
          According to the CDC, approximately 1 in 36 children in the United States is diagnosed with ASD. It occurs across all racial, ethnic, and socioeconomic groups and is about four times more common in boys than girls.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Early Signs</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>Limited or no eye contact</li>
          <li>Not responding to their name by 12 months</li>
          <li>Not pointing at objects to show interest by 14 months</li>
          <li>Delayed speech and language skills</li>
          <li>Repetitive movements (hand flapping, rocking)</li>
          <li>Difficulty with changes in routine</li>
          <li>Unusual reactions to sensory input</li>
        </ul>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl font-bold text-foreground">Why Early Screening Matters</h2>
        <p className="text-muted-foreground leading-relaxed">
          Research shows that early intervention — ideally before age 3 — can lead to significant improvements in communication, social skills, and adaptive behavior. Screening tools like AutismCare AI help clinicians identify children who may benefit from further diagnostic evaluation.
        </p>
      </div>

      <div className="border-t border-border pt-6 scroll-reveal">
        <p className="text-xs text-muted-foreground">
          This information is provided for educational purposes. For clinical guidance, consult current DSM-5 criteria and peer-reviewed literature.
        </p>
      </div>
    </div>
  );
};

export default WhatIsASD;
