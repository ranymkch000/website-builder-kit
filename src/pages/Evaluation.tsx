import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon, X, Send } from "lucide-react";

const Evaluation = () => {
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
    // Simulate AI model prediction
    const score = Math.floor(Math.random() * 40) + 40; // 40-80
    const confidence = Math.floor(Math.random() * 20) + 75; // 75-95
    navigate("/results", { state: { score, confidence, imageName: fileName } });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="font-heading text-3xl font-bold text-foreground">ASD Screening</h1>
      <p className="text-muted-foreground mt-1 mb-8">Upload an image for AI-based autism spectrum analysis</p>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="font-heading">Image Upload</CardTitle>
          <CardDescription>Provide a facial image for the AI model to analyze</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!image ? (
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragging ? "border-foreground bg-muted" : "border-border hover:border-foreground/40"
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
            >
              <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
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
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img src={image} alt="Uploaded" className="w-full max-h-96 object-contain bg-muted" />
                <button
                  onClick={() => { setImage(null); setFileName(""); }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
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

          <Button onClick={handleSubmit} disabled={!image} className="w-full gap-2" size="lg">
            <Send className="w-4 h-4" /> Analyze Image
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-muted-foreground mt-6">
        ⚠️ This is a decision-support tool and does not constitute a medical diagnosis.
      </p>
    </div>
  );
};

export default Evaluation;
