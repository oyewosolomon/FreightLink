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
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <SheetContent className="flex flex-col gap-4">
              <NavLinks />
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-6 ml-6 flex-1">
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