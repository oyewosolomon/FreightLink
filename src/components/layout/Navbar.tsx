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
  { label: "Contact", href: "/#contact" }
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
        <svg fill={`${isScrolled ?'#000000':'#ffffff'}`} height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.623,0,0,114.614,0,256c0,141.377,114.623,256,256,256c141.386,0,256-114.623,256-256 C512,114.614,397.386,0,256,0z M52.423,180.272h153.213l-6.467,26.559H52.423V180.272z M168.732,331.728H52.423v-26.559h122.781 L168.732,331.728z M183.951,269.279H52.423v-26.559h137.999L183.951,269.279z M362.408,329.953H196.504l34.973-143.563h165.904 L362.408,329.953z"></path> </g> </g> </g></svg>
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