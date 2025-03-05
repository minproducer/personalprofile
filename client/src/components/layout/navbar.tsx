"use client";

import { useCallback, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
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
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-40 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/#">
          <a className="text-xl font-bold hover:text-primary transition-colors">
            MinProducer
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "relative px-1 py-2 transition-colors hover:text-primary",
                  location === item.href.substring(1) && "text-primary"
                )}
              >
                {location === item.href.substring(1) && (
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
            </Link>
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
                  <Link href={item.href}>
                    <a
                      className={cn(
                        "block py-3 text-lg transition-colors hover:text-primary",
                        location === item.href.substring(1) && "text-primary"
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}