import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientProvider from "./ClientProvider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniSource",
  description: "University-Driven Open Source Community",

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <ClientProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ClientProvider>
      </body>
    </html>
   
  );
}
