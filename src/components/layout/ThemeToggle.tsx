import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // Assuming you have a Switch component
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <label htmlFor="theme-toggle">
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </label>
    </div>
  );
}