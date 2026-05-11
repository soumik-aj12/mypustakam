import { BookMarked, Mail, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter w-full px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div>
          <div className="text-headline-md font-headline-md font-semibold text-primary dark:text-primary-fixed-dim mb-4">
            Aurelia Books
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            A boutique sanctuary for the modern intellectual. We believe every
            book is a gateway to a new world.
          </p>
        </div>
        <div>
          <h4 className="text-label-md font-label-md font-bold text-on-surface mb-4 uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Staff Picks
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Bespoke Editions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-label-md font-label-md font-bold text-on-surface mb-4 uppercase tracking-wider">
            Service
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-surface-variant font-medium text-body-md hover:text-primary dark:hover:text-primary-fixed underline decoration-primary/30 transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-label-md font-label-md font-bold text-on-surface mb-4 uppercase tracking-wider">
            Social
          </h4>
          <div className="flex gap-4">
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined"><Mail/></span>
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">
                <BookMarked />
              </span>
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined"><Rss /></span>
            </a>
          </div>
          <div className="mt-6">
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              © 2024 Aurelia Books. Crafted for the intellectual soul.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
