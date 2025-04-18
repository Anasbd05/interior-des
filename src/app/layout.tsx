import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContextProvider from "@/context/ContextProvider";
import {ToastContainer} from "react-toastify";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100","300","400","700","900"]
})

export const metadata: Metadata = {
  title: "Airtalee design",
  description: "a website for a store about interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${lato.className} antialiased`}
      >
        <ContextProvider>
          <Navbar />
          <div className="mt-20">
            {children}
            <ToastContainer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
