import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../global.css"

export const metadata = {
  title: "Therads",
  description: "Therads",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
