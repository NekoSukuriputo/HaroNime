"use client";

import NavbarComponent from "@/components/navbar/Navbar";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <NavbarComponent />
    </div>
  );
}
