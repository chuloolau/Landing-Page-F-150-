type AssetPlaceholderProps = {
  filename: string;
  hint?: string;
  className?: string;
};

export default function AssetPlaceholder({
  filename,
  hint,
  className = '',
}: AssetPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1.5 text-center px-3 ${className}`}
      style={{
        background:
          'repeating-linear-gradient(45deg, #E5E5E1, #E5E5E1 10px, #EDEDE9 10px, #EDEDE9 20px)',
      }}
    >
      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink/50 bg-white/85 px-2 py-1 rounded">
        Reemplazar
      </span>
      <span className="font-mono text-[10px] sm:text-[11px] text-ink/75 bg-white/90 px-2 py-1 rounded break-all">
        /{filename}
      </span>
      {hint && (
        <span className="font-mono text-[9px] text-ink/45 max-w-[220px] leading-relaxed">
          {hint}
        </span>
      )}
    </div>
  );
}
