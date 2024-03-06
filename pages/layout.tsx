import type { Metadata } from "next";
import "../styles/globals.css";
import Head from "next/head";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet" />
        <title>SA | Mon portfolio</title>
      </Head>
      <body className="">{children}</body>
    </html>
  );
}