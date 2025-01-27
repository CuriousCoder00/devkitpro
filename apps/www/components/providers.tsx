import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableColorScheme
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
