"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <div className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-slate-900 h-screen overflow-scroll w-screen">
        {children}
        {/* bg-gradient-to-b from-yellow-400 via-yellow-200 to-white */}
        {/* bg-gradient-to-b from-indigo-700 via-sky-400 to-white */}
      </div>
    </NextThemesProvider>
  );
}
