import { Link } from "react-router-dom";

export function Header() {
  const linkBase = "hover:text-flame transition-colors";
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-flame" />
          <span className="text-sm font-semibold tracking-display">MERIDIAN&nbsp;&amp;&nbsp;CO.</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <Link to="/" className={linkBase}>Home</Link>
          <Link to="/services" className={linkBase}>Services</Link>
          <Link to="/about" className={linkBase}>About</Link>
        </nav>
        <Link
          to="/"
          className="group hidden items-center gap-2 rounded-full border border-current/20 px-5 py-2.5 text-xs font-medium uppercase tracking-eyebrow transition-all hover:bg-flame hover:border-flame hover:text-flame-foreground md:inline-flex"
        >
          Discovery Call
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </header>
  );
}
