import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Print | Personalización en San Martín, Mendoza",
  description:
    "DTF textil, sublimación, vinilo textil, stickers UV, grabado y corte láser en San Martín, Mendoza.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
