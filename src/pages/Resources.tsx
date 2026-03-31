import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    category: "Clinical Guidelines",
    items: [
      { title: "CDC — Autism Spectrum Disorder", url: "https://www.cdc.gov/ncbddd/autism/", desc: "Comprehensive information on ASD from the Centers for Disease Control and Prevention." },
      { title: "AAP Screening Recommendations", url: "https://www.aap.org/", desc: "American Academy of Pediatrics guidelines for developmental screening." },
      { title: "DSM-5 Diagnostic Criteria", url: "https://www.psychiatry.org/", desc: "Official diagnostic criteria for Autism Spectrum Disorder." },
    ],
  },
  {
    category: "Research & Literature",
    items: [
      { title: "Autism Research (Journal)", url: "https://onlinelibrary.wiley.com/journal/19393806", desc: "Peer-reviewed journal publishing autism research." },
      { title: "JAMA Pediatrics", url: "https://jamanetwork.com/journals/jamapediatrics", desc: "Leading journal for pediatric medicine and developmental research." },
      { title: "PubMed — ASD Studies", url: "https://pubmed.ncbi.nlm.nih.gov/?term=autism+spectrum+disorder", desc: "Searchable database of biomedical literature on ASD." },
    ],
  },
  {
    category: "Support Organizations",
    items: [
      { title: "Autism Speaks", url: "https://www.autismspeaks.org/", desc: "Advocacy organization promoting autism awareness, research, and support." },
      { title: "Autism Science Foundation", url: "https://autismsciencefoundation.org/", desc: "Funding evidence-based autism research." },
      { title: "ASAN — Autistic Self Advocacy Network", url: "https://autisticadvocacy.org/", desc: "Run by and for autistic people, promoting disability rights." },
    ],
  },
  {
    category: "Screening Tools",
    items: [
      { title: "M-CHAT-R/F", url: "https://mchatscreen.com/", desc: "Modified Checklist for Autism in Toddlers — widely used screening instrument." },
      { title: "ADOS-2", url: "https://www.wpspublish.com/ados-2", desc: "Autism Diagnostic Observation Schedule — gold standard diagnostic assessment." },
    ],
  },
];

const Resources = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div className="animate-fade-in">
        <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">Resources</h1>
        <p className="text-muted-foreground mt-3">Curated references for clinicians and researchers working with ASD.</p>
        <div className="w-16 h-0.5 bg-foreground mt-4" />
      </div>

      {resources.map((section, si) => (
        <div key={si} className="space-y-4 scroll-reveal">
          <h2 className="font-heading text-2xl font-bold text-foreground">{section.category}</h2>
          <div className="space-y-3">
            {section.items.map((item, ii) => (
              <a
                key={ii}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border p-4 rounded-lg hover:border-foreground/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-foreground group-hover:underline">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-border pt-6 scroll-reveal">
        <p className="text-xs text-muted-foreground">
          External links are provided for informational purposes. AutismCare AI is not affiliated with these organizations.
        </p>
      </div>
    </div>
  );
};

export default Resources;
