const RotatingBrain = () => {
  return (
    <div className="brain-container">
      <div className="brain-glow" />
      <div className="brain-sphere">
        {/* Neural network lines */}
        <svg viewBox="0 0 400 400" className="brain-svg">
          {/* Brain outline - left hemisphere */}
          <path
            d="M200 60 C140 60, 80 100, 70 160 C60 220, 80 280, 120 310 C140 325, 170 340, 200 340"
            fill="none"
            stroke="url(#brainGrad)"
            strokeWidth="2"
            className="brain-path"
          />
          {/* Brain outline - right hemisphere */}
          <path
            d="M200 60 C260 60, 320 100, 330 160 C340 220, 320 280, 280 310 C260 325, 230 340, 200 340"
            fill="none"
            stroke="url(#brainGrad)"
            strokeWidth="2"
            className="brain-path"
          />
          {/* Central fissure */}
          <path
            d="M200 65 L200 335"
            fill="none"
            stroke="url(#brainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* Gyri lines - left */}
          <path d="M90 160 C120 140, 160 150, 195 145" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M85 200 C120 185, 155 195, 195 190" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M95 240 C125 225, 160 235, 195 230" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M115 275 C140 262, 165 270, 195 268" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          {/* Gyri lines - right */}
          <path d="M310 160 C280 140, 240 150, 205 145" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M315 200 C280 185, 245 195, 205 190" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M305 240 C275 225, 240 235, 205 230" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          <path d="M285 275 C260 262, 235 270, 205 268" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          {/* Frontal lobe curve */}
          <path d="M130 100 C155 85, 180 75, 200 72 C220 75, 245 85, 270 100" fill="none" stroke="url(#brainGrad)" strokeWidth="1.2" className="brain-detail" />
          {/* Neural nodes */}
          {[
            [150, 130], [250, 130], [120, 180], [280, 180], [140, 230], [260, 230],
            [160, 280], [240, 280], [200, 110], [200, 200], [200, 290],
            [100, 200], [300, 200], [170, 160], [230, 160], [175, 250], [225, 250],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill="url(#nodeGrad)"
              className="brain-node"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          {/* Neural connections */}
          {[
            [[150, 130], [200, 110]], [[250, 130], [200, 110]], [[150, 130], [170, 160]],
            [[250, 130], [230, 160]], [[170, 160], [200, 200]], [[230, 160], [200, 200]],
            [[120, 180], [170, 160]], [[280, 180], [230, 160]], [[120, 180], [140, 230]],
            [[280, 180], [260, 230]], [[140, 230], [175, 250]], [[260, 230], [225, 250]],
            [[175, 250], [200, 290]], [[225, 250], [200, 290]], [[200, 200], [175, 250]],
            [[200, 200], [225, 250]], [[100, 200], [120, 180]], [[300, 200], [280, 180]],
            [[160, 280], [175, 250]], [[240, 280], [225, 250]],
          ].map(([[x1, y1], [x2, y2]], i) => (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#brainGrad)"
              strokeWidth="0.8"
              opacity="0.4"
              className="brain-connection"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
          <defs>
            <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--brain-glow))" />
            </linearGradient>
            <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--brain-glow))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Orbital rings */}
      <div className="brain-ring brain-ring-1" />
      <div className="brain-ring brain-ring-2" />
      <div className="brain-ring brain-ring-3" />
    </div>
  );
};

export default RotatingBrain;
