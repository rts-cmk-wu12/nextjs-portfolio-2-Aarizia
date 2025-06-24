import { Raleway, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jonas' Portfolio",
  description: "Jonas' personal portfolio showcasing his work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
