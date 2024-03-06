import type { Metadata } from "next";
import "../styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet" />
        <title>SA | Mon portfolio</title>
      </head>
      <body className="">{children}</body>
    </html>
  );
}