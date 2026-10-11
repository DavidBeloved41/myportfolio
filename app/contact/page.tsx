import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";
import { contactEmail } from "@/lib/site";

export const metadata = {
  title: "Contact | David Atakpa",
  description: "Contact David Atakpa about software engineering internships, junior developer opportunities, or project collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | David Atakpa",
    description: "Contact David Atakpa about software engineering internships, junior developer opportunities, or project collaboration.",
    type: "website",
  },
};

const links = [
  { label: "GitHub", detail: "Code, experiments, and projects", href: "https://github.com/DavidBeloved41", Icon: Code2 },
  { label: "LinkedIn", detail: "Professional profile", href: "https://linkedin.com/in/david-atakpa-903461322", Icon: BriefcaseBusiness },
];

export default function ContactPage() {
  return (
    <main className="page-main contact-page" id="main-content">
      <section className="page-intro contact-intro">
        <div className="container page-intro-inner">
          <p className="eyebrow">CONTACT / GHANA</p>
          <h1>Talk about a project.</h1>
          <p className="page-lede">For early career roles, project collaboration, or a question about my work, email is the best way to reach me.</p>
        </div>
      </section>
      <section className="contact-content section">
        <div className="container contact-grid">
          <div className="contact-copy"><p className="eyebrow">GET IN TOUCH</p><h2>Opportunities and collaboration.</h2><p>I’m open to software engineering internships, junior developer roles, and project or technical collaboration. I’m based in Ghana and available by email or through my professional profiles.</p><div className="contact-location"><MapPin aria-hidden="true" size={17} /><span>Ghana</span></div></div>
          <div className="contact-methods">
            {links.map(({ label, detail, href, Icon }) => (
              <a className="contact-method" href={href} key={label} rel="noreferrer" target="_blank">
                <span className="contact-method-icon"><Icon aria-hidden="true" size={19} /></span>
                <span className="contact-method-copy"><strong>{label}</strong><small>{detail}</small></span>
                <ArrowUpRight aria-hidden="true" className="contact-method-arrow" size={18} />
              </a>
            ))}
            <a className="contact-method" href={`mailto:${contactEmail}`}>
              <span className="contact-method-icon"><Mail aria-hidden="true" size={19} /></span>
              <span className="contact-method-copy"><strong>Email</strong><small>{contactEmail}</small></span>
              <ArrowUpRight aria-hidden="true" className="contact-method-arrow" size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="contact-bottom"><div className="container"><span>David Atakpa <i>·</i> Software Developer &amp; Product Builder</span></div></section>
    </main>
  );
}