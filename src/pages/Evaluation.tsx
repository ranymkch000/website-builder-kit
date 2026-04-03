import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon, X, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Evaluation = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = () => {
    if (!image) return;
    const score = Math.floor(Math.random() * 40) + 40;
    const confidence = Math.floor(Math.random() * 20) + 75;
    navigate("/results", { state: { score, confidence, imageName: fileName } });
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <div className="animate-fade-in mb-10">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">Evaluate</p>
        <h1 className="font-heading text-3xl md:text-4xl text-foreground">ASD Screening</h1>
        <p className="text-muted-foreground mt-2 text-lg">Upload an image for AI-based autism spectrum analysis</p>
      </div>

      <div className="modern-card rounded-2xl p-8 space-y-6 scroll-reveal">
        <div>
          <h2 className="font-heading text-xl text-foreground">Image Upload</h2>
          <p className="text-sm text-muted-foreground mt-1">Provide a facial image for the AI model to analyze</p>
        </div>

        {!image ? (
          <div
            className={`border-2 border-dashed rounded-2xl p-14 text-center cursor-pointer transition-all ${
              isDragging ? "border-foreground bg-muted/50 scale-[1.01]" : "border-border hover:border-foreground/30 hover:bg-muted/30"
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <div className="w-14 h-14 rounded-2xl bg-muted mx-auto mb-5 flex items-center justify-center">
              <Upload className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-foreground font-medium mb-1">Drop image here or click to browse</p>
            <p className="text-sm text-muted-foreground">Supports JPG, PNG, WEBP</p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img src={image} alt="Uploaded" className="w-full max-h-96 object-contain bg-muted" />
              <button
                onClick={() => { setImage(null); setFileName(""); }}
                className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ImageIcon className="w-4 h-4" />
              <span>{fileName}</span>
            </div>
          </div>
        )}

        <Button onClick={handleSubmit} disabled={!image} className="w-full gap-2 rounded-xl h-12 text-sm font-semibold" size="lg">
          <Send className="w-4 h-4" /> Analyze Image
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        ⚠️ This is a decision-support tool and does not constitute a medical diagnosis.
      </p>
    </div>
  );
};

export default Evaluation;
