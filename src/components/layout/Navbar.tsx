import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "About", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`${isScrolled ? 'text-black dark:text-white' : 'text-white'} hover:text-primary transition-colors`}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={`sticky max-w-7xl mx-auto rounded-2xl top-2 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isScrolled ? 'text-black dark:text-white' : 'text-white'}`}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="font-bold text-xl">FreightLink</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col place-items-center gap-4">
              <NavLinks />
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex justify-center items-center space-x-6 ml-6 flex-1">
            <NavLinks />
          </nav>
        )}

        <div className={`${isMobile ? 'mr-2' : 'ml-auto'}`}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}