import type { Metadata } from "next";
import React from "react";
import {Container} from "@mui/material";
import "./global.css";
import Header from "@/components/layout/header";
import QueryProvider from "@/components/misc/query-provider/QueryProvider";

export const metadata: Metadata = {
  title: "Bebra store",
  description: "Best e-store ever. Lowest prices, best quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <QueryProvider>
        <Header />
        <Container sx={{ bgcolor: "#ccc", minHeight: "100vh", p: "0 0 20px 0" }}>
          {children}
        </Container>
      </QueryProvider>
      </body>
    </html>
  );
}
