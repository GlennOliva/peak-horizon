export function LogoStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const labels = ["BLOOMBERG", "FORBES", "MONOCLE", "FT", "ROBB REPORT", "WSJ", "ECONOMIST"];
  const color = tone === "dark" ? "text-iron" : "text-ink/40";
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="flex items-center gap-16 whitespace-nowrap py-2">
        {[...labels, ...labels].map((l, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className={`text-xs font-medium tracking-eyebrow ${color}`}>{l}</span>
            <span className={`inline-block h-px w-10 bg-current opacity-20 ${color}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
