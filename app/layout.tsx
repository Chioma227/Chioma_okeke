import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "@/styles/globals.scss";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chioma Okeke",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}