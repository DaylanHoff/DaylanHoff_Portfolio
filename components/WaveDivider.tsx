interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  variant?: "wave" | "curve" | "slant";
  fillClass?: string;
}

export function WaveDivider({ flip = false, className = "", variant = "wave", fillClass = "fill-background" }: WaveDividerProps) {
  const transform = flip ? "rotate(180)" : undefined;

  if (variant === "curve") {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[30px] md:h-[50px]"
          style={{ transform }}
        >
          <path
            d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
            className={fillClass}
            style={{ opacity: 0.6 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "slant") {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[30px] md:h-[50px]"
          style={{ transform }}
        >
          <path d="M0,0 L1200,60 L1200,120 L0,120 Z" className={fillClass} style={{ opacity: 0.6 }} />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[30px] md:h-[60px]"
        style={{ transform }}
      >
        <path
          d="M0,60 C150,100 350,0 500,40 C650,80 750,20 900,50 C1050,80 1150,30 1200,60 L1200,120 L0,120 Z"
          className={fillClass}
          style={{ opacity: 0.6 }}
        />
      </svg>
    </div>
  );
}
