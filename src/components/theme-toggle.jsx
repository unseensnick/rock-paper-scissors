"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                disabled
                suppressHydrationWarning
            >
                <Sun className="size-[1.2rem]" suppressHydrationWarning />
                <span className="sr-only">Loading theme toggle</span>
            </Button>
        );
    }

    const toggleTheme = () => {
        if (theme === "system") {
            // If system theme, switch to the opposite of current resolved theme
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        } else {
            // If explicit theme set, toggle between light and dark
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };

    const isDark = resolvedTheme === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden rounded-full"
        >
            <Sun
                className={`size-[1.2rem] transition-all duration-300 ${
                    isDark
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                }`}
            />
            <Moon
                className={`absolute size-[1.2rem] transition-all duration-300 ${
                    isDark
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                }`}
            />
            <span className="sr-only">
                {isDark ? "Switch to light mode" : "Switch to dark mode"}
            </span>
        </Button>
    );
}
