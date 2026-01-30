export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-green-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <section className="md:col-span-1">
            <h3 className="text-xl font-bold">MJK Solutions</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Web Development and Instructional Design for brands and teams who
              want clarity, structure, and measurable results.
            </p>
            {/* Social */}
            <section className="mt-6">
              <p className="text-sm font-semibold">Social</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
                <a className="hover:text-white" href="#" aria-label="Twitter/X">
                  X
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="#" aria-label="Instagram">
                  Instagram
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="#" aria-label="WhatsApp">
                  WhatsApp
                </a>
              </div>
            </section>
          </section>

          {/* Quick links */}
          <section>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="hover:text-white" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="hover:text-white" href="#services">
                  Web Development
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Landing Pages
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Instructional Design
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Training Materials
                </a>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <span className="block text-white/50">Email</span>
                <a className="hover:text-white" href="mailto:hello@mjk.com">
                  contact@mjk.com
                </a>
              </li>
              <li>
                <span className="block text-white/50">Phone</span>
                <a className="hover:text-white" href="tel:+2340000000000">
                  +2348148309053
                </a>
              </li>
              <li>
                <span className="block text-white/50">Location</span>
                <span>Ogun, Nigeria</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom bar */}
        <section className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} MJK Solutions. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
