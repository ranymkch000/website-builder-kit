import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhatIsASD = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl space-y-14">
      <div className="animate-fade-in">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">Education</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-tight">What is ASD?</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-xl leading-relaxed">
          Understanding Autism Spectrum Disorder and the importance of early screening.
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed scroll-reveal">
        <p>
          <strong className="text-foreground">Autism Spectrum Disorder (ASD)</strong> is a neurodevelopmental condition characterized by differences in social communication, interaction, and patterns of behavior. It is called a "spectrum" because it manifests differently in every individual.
        </p>
        <p>
          ASD is not a disease. It is a lifelong condition that affects how a person perceives the world, communicates, and interacts with others. Early identification allows for timely support and intervention.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Key Characteristics</h2>
        <div className="grid gap-3">
          {[
            { title: "Social Communication", desc: "Difficulty with back-and-forth conversation, understanding nonverbal cues, or developing relationships." },
            { title: "Restricted Interests", desc: "Intense focus on specific topics, adherence to routines, or repetitive patterns of behavior." },
            { title: "Sensory Differences", desc: "Over- or under-sensitivity to sensory input such as sounds, textures, lights, or tastes." },
          ].map((item) => (
            <div key={item.title} className="modern-card rounded-xl p-5 space-y-1">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Prevalence</h2>
        <p className="text-muted-foreground leading-relaxed">
          According to the CDC, approximately 1 in 36 children in the United States is diagnosed with ASD. It occurs across all racial, ethnic, and socioeconomic groups and is about four times more common in boys than girls.
        </p>
      </div>

      <div className="space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Early Signs</h2>
        <div className="modern-card rounded-2xl p-6">
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Limited or no eye contact",
              "Not responding to their name by 12 months",
              "Not pointing at objects to show interest by 14 months",
              "Delayed speech and language skills",
              "Repetitive movements (hand flapping, rocking)",
              "Difficulty with changes in routine",
              "Unusual reactions to sensory input",
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0 mt-2" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-4 scroll-reveal">
        <h2 className="font-heading text-2xl text-foreground">Why Early Screening Matters</h2>
        <p className="text-muted-foreground leading-relaxed">
          Research shows that early intervention — ideally before age 3 — can lead to significant improvements in communication, social skills, and adaptive behavior. Screening tools like Autivision help clinicians identify children who may benefit from further diagnostic evaluation.
        </p>
      </div>

      <div className="section-divider w-full scroll-reveal" />
      <p className="text-xs text-muted-foreground scroll-reveal">
        This information is provided for educational purposes. For clinical guidance, consult current DSM-5 criteria and peer-reviewed literature.
      </p>
    </div>
  );
};

export default WhatIsASD;
