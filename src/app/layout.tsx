import "./globals.css";
import type { ReactNode } from "react";
import { AppChrome } from "@/components/ui/app-chrome";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
