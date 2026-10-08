import type { Metadata } from "next";
import "./globals.css";
// import "./corrections.css";
import { InkExperience } from "@/components/motion/InkExperience";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";



export const metadata: Metadata = {
  title: "Structura — Crafting Structures, Creating Futures",
  description:
    "Structura is an architecture and construction studio delivering commercial and residential projects built to last.",
};

// Runs before hydration so the correct theme class is already on <html>
// when the page paints — this removes the light/dark flash on load.
const themeInitScript = 'document.documentElement.classList.remove("dark");';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans bg-[#f8faf9] text-ink-900 antialiased">
        <LanguageProvider><ThemeProvider>
          <SmoothScrollProvider>
            <InkExperience />{children}
          </SmoothScrollProvider>
        </ThemeProvider></LanguageProvider>
      </body>
    </html>
  );
}
