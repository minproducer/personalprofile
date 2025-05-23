"use client";

import { useCallback, useState } from "react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "home", label: "Home" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function Navbar() {
  const location = useScrollToHash();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    closeMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Cập nhật URL hash nhưng không thêm dấu / vào trước
      window.history.pushState(null, "", `#${sectionId}`);
    }
  }, [closeMenu]);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-40 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold hover:text-primary transition-colors cursor-pointer bg-primary/10 px-3 py-1 rounded-md"
          onClick={(e) => handleNavClick(e, "home")}
        >
          MinProducer
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={cn(
                "relative px-3 py-2 transition-all hover:text-primary cursor-pointer rounded-md hover:bg-primary/10",
                location === item.href ? "text-primary bg-primary/10" : ""
              )}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {location === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="hover:bg-primary/10"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-background/95 backdrop-blur-sm border-b"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <a
                    href={`#${item.href}`}
                    className={cn(
                      "block py-3 px-3 text-lg transition-all hover:text-primary cursor-pointer rounded-md hover:bg-primary/10",
                      location === item.href ? "text-primary bg-primary/10" : ""
                    )}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}