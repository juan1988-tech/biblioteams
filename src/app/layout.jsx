import { Comic_Neue } from "next/font/google";
import "./globals.css";
import ThemeProvider, { ThemeContext } from "./theme-provider";
import { useContext } from "react";
import Hero from "@/components/Home/Hero/Hero";
import styles from "./page.module.css";
import HomeSearchBar from "@/components/Home/HomeSearchBar/HomeSearchBar";
import Workshops from "@/components/Home/Workshops/Workshops";
import Events from "@/components/Home/Events/Events";
import Footer from "@/components/Layout/Footer/Footer";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ['300','400','700'],
});

export const metadata = {
  title: "Biblioteams",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body className={comicNeue.className}>
        <ThemeProvider>
          {children}
          <Hero/>
          <HomeSearchBar/>
          <Workshops/>
          <Events/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
