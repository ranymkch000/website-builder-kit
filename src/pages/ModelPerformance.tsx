import { useScrollReveal } from "@/hooks/useScrollReveal";

const confusionMatrix = {
  tp: 142, fp: 18,
  fn: 12, tn: 128,
};

const metrics = [
  { label: "Accuracy", value: "90.0%", desc: "(TP+TN) / Total" },
  { label: "Precision", value: "88.8%", desc: "TP / (TP+FP)" },
  { label: "Recall / Sensitivity", value: "92.2%", desc: "TP / (TP+FN)" },
  { label: "Specificity", value: "87.7%", desc: "TN / (TN+FP)" },
  { label: "F1 Score", value: "90.4%", desc: "2·(P·R)/(P+R)" },
  { label: "AUC-ROC", value: "0.943", desc: "Area Under ROC Curve" },
];

const rocPoints = [
  [0, 0], [0.02, 0.15], [0.05, 0.35], [0.08, 0.52], [0.12, 0.68],
  [0.18, 0.78], [0.25, 0.85], [0.35, 0.90], [0.50, 0.94], [0.70, 0.97], [1, 1],
];

const prPoints = [
  [0, 1], [0.15, 0.95], [0.35, 0.93], [0.52, 0.90], [0.68, 0.87],
  [0.78, 0.83], [0.85, 0.78], [0.90, 0.72], [0.94, 0.65], [0.97, 0.55], [1, 0.40],
];

const ModelPerformance = () => {
  useScrollReveal();

  const toSvgPath = (points: number[][], w: number, h: number) => {
    return points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x * w} ${(1 - y) * h}`)
      .join(" ");
  };

  const chartW = 280;
  const chartH = 220;

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl space-y-10">
      <div className="animate-fade-in">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">Analytics</p>
        <h1 className="font-heading text-3xl md:text-4xl text-foreground">Model Performance</h1>
        <p className="text-muted-foreground mt-2 text-lg">Evaluation metrics, confusion matrix, and diagnostic curves</p>
      </div>

      {/* Metrics grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 scroll-reveal">
        {metrics.map((m) => (
          <div key={m.label} className="modern-card hover-lift rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">{m.label}</p>
            <p className="text-3xl font-bold font-heading text-foreground mt-2">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Confusion Matrix */}
      <div className="modern-card rounded-2xl p-8 scroll-reveal">
        <h2 className="font-heading text-xl text-foreground">Confusion Matrix</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-6">Prediction vs. actual classification on the test set (n=300)</p>
        <div className="max-w-sm mx-auto">
          <div className="grid grid-cols-3 text-center text-sm">
            <div />
            <div className="py-2 font-semibold text-foreground">Predicted ASD</div>
            <div className="py-2 font-semibold text-foreground">Predicted Non-ASD</div>

            <div className="py-4 font-semibold text-foreground flex items-center justify-center">Actual ASD</div>
            <div className="py-4 bg-foreground text-background font-bold text-2xl rounded-tl-xl border border-border">
              {confusionMatrix.tp}
              <p className="text-xs font-normal opacity-70">TP</p>
            </div>
            <div className="py-4 bg-muted text-foreground font-bold text-2xl rounded-tr-xl border border-border">
              {confusionMatrix.fn}
              <p className="text-xs font-normal text-muted-foreground">FN</p>
            </div>

            <div className="py-4 font-semibold text-foreground flex items-center justify-center">Actual Non-ASD</div>
            <div className="py-4 bg-muted text-foreground font-bold text-2xl rounded-bl-xl border border-border">
              {confusionMatrix.fp}
              <p className="text-xs font-normal text-muted-foreground">FP</p>
            </div>
            <div className="py-4 bg-foreground text-background font-bold text-2xl rounded-br-xl border border-border">
              {confusionMatrix.tn}
              <p className="text-xs font-normal opacity-70">TN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curves */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="modern-card rounded-2xl p-6 scroll-reveal">
          <h3 className="font-heading text-lg text-foreground">ROC Curve</h3>
          <p className="text-sm text-muted-foreground mb-4">AUC = 0.943</p>
          <div className="flex justify-center">
            <svg viewBox={`-30 -10 ${chartW + 50} ${chartH + 40}`} className="w-full max-w-xs">
              {[0, 0.25, 0.5, 0.75, 1].map((v) => (
                <g key={v}>
                  <line x1={0} y1={(1 - v) * chartH} x2={chartW} y2={(1 - v) * chartH} stroke="currentColor" className="text-border" strokeWidth="0.5" />
                  <text x={-8} y={(1 - v) * chartH + 4} textAnchor="end" className="text-muted-foreground fill-current" fontSize="9">{v.toFixed(1)}</text>
                  <line x1={v * chartW} y1={0} x2={v * chartW} y2={chartH} stroke="currentColor" className="text-border" strokeWidth="0.5" />
                  <text x={v * chartW} y={chartH + 14} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="9">{v.toFixed(1)}</text>
                </g>
              ))}
              <line x1={0} y1={chartH} x2={chartW} y2={0} stroke="currentColor" className="text-muted-foreground/30" strokeWidth="1" strokeDasharray="4 4" />
              <path d={toSvgPath(rocPoints, chartW, chartH)} fill="none" stroke="currentColor" className="text-foreground" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x={chartW / 2} y={chartH + 30} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="10">False Positive Rate</text>
              <text x={-25} y={chartH / 2} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="10" transform={`rotate(-90, -25, ${chartH / 2})`}>True Positive Rate</text>
            </svg>
          </div>
        </div>

        <div className="modern-card rounded-2xl p-6 scroll-reveal">
          <h3 className="font-heading text-lg text-foreground">Precision-Recall Curve</h3>
          <p className="text-sm text-muted-foreground mb-4">Average Precision = 0.891</p>
          <div className="flex justify-center">
            <svg viewBox={`-30 -10 ${chartW + 50} ${chartH + 40}`} className="w-full max-w-xs">
              {[0, 0.25, 0.5, 0.75, 1].map((v) => (
                <g key={v}>
                  <line x1={0} y1={(1 - v) * chartH} x2={chartW} y2={(1 - v) * chartH} stroke="currentColor" className="text-border" strokeWidth="0.5" />
                  <text x={-8} y={(1 - v) * chartH + 4} textAnchor="end" className="text-muted-foreground fill-current" fontSize="9">{v.toFixed(1)}</text>
                  <line x1={v * chartW} y1={0} x2={v * chartW} y2={chartH} stroke="currentColor" className="text-border" strokeWidth="0.5" />
                  <text x={v * chartW} y={chartH + 14} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="9">{v.toFixed(1)}</text>
                </g>
              ))}
              <path d={toSvgPath(prPoints, chartW, chartH)} fill="none" stroke="currentColor" className="text-foreground" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x={chartW / 2} y={chartH + 30} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="10">Recall</text>
              <text x={-25} y={chartH / 2} textAnchor="middle" className="text-muted-foreground fill-current" fontSize="10" transform={`rotate(-90, -25, ${chartH / 2})`}>Precision</text>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Metrics computed on a held-out test set. Model architecture: CNN-based classifier trained on facial image data.
      </p>
    </div>
  );
};

export default ModelPerformance;
