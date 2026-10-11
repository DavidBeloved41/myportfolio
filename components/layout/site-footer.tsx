import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="footer-name" href="/">David Atakpa</Link>
          <p className="footer-note">Software Developer &amp; Product Builder · Ghana</p>
        </div>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com/DavidBeloved41" rel="noreferrer" target="_blank">
            <Code2 aria-hidden="true" size={16} /> GitHub <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a href="https://linkedin.com/in/david-atakpa-903461322" rel="noreferrer" target="_blank">
            <BriefcaseBusiness aria-hidden="true" size={16} /> LinkedIn <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} David Atakpa</p>
      </div>
    </footer>
  );
}