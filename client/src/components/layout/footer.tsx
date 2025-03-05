import { SiGithub, SiFacebook, SiTiktok, SiYoutube } from "react-icons/si";

const socialLinks = [
  { href: "https://github.com/minproducer", icon: SiGithub, label: "GitHub" },
  { href: "https://facebook.com/minproducer.fb", icon: SiFacebook, label: "Facebook" },
  { href: "https://tiktok.com/@minproducer_tiktok", icon: SiTiktok, label: "TikTok" },
  { href: "https://youtube.com/@minproducer_yt", icon: SiYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MinProducer. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
