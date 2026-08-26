import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Navneet Kumar — Frontend Developer",
  description:
    "Frontend developer in Delhi building fast, interactive web products with React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${body.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastContainer theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
