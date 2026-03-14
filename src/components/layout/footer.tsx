import { Heart } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Pricing", href: "#pricing" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Resources: [
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                CM
              </div>
              <span className="text-lg font-bold text-text-primary">
                CoachHub
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed mb-4">
              All-in-one cloud platform for coaching institutes. Manage
              students, teachers, attendance, exams, finances, and SMS
              notifications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/5 transition-colors text-xs font-bold"
                  aria-label={link.label}
                >
                  {link.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} CoachHub. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
