"use client";

import NavbarComponent from "@/components/navbar/Navbar";
import { fetchSeasonNow } from "@/lib/redux/features/anime/getSeasonsNow";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useEffect } from "react";
// import { useTheme } from "next-themes";

export default function Home() {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSeasonNow());
  }, [dispatch]);

  const listData = useAppSelector(({ seasonNow }) => seasonNow);

  return (
    <div>
      <NavbarComponent />
      {JSON.stringify(listData)}
    </div>
  );
}
