"use client";
import { Button } from "@/components/buttons/Button";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Button
        </Button>
      </div>
    </main>
  );
}
