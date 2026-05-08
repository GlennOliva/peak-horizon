import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-10 md:px-10">
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-iron">For your future</p>
            <h2 className="display-lg mt-6 text-paper">
              A conversation, <span className="font-serif-italic font-normal text-iron">not a pitch.</span>
            </h2>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-flame px-6 py-3 text-sm font-medium text-flame-foreground transition-transform hover:translate-x-1"
            >
              Schedule A Discovery Call <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="eyebrow text-iron">Navigate</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><Link to="/" className="hover:text-flame">Home</Link></li>
                <li><Link to="/services" className="hover:text-flame">Services</Link></li>
                <li><Link to="/about" className="hover:text-flame">About</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-iron">Practice</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>Wealth Management</li>
                <li>Retirement Planning</li>
                <li>Lifestyle Services</li>
                <li>Philanthropy</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-iron">Contact</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>hello@meridian.co</li>
                <li>London · Zurich · NYC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 text-xs text-iron/70 md:grid-cols-2">
          <p>© {new Date().getFullYear()} Meridian &amp; Co. All rights reserved.</p>
          <p className="md:text-right">
            All regulated financial services are provided solely by the licensed partner firm. Our brand provides all non-regulated strategic advisory services.
          </p>
        </div>
      </div>
    </footer>
  );
}
