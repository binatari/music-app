import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/navigation/Sidebar";
// import Player from "@/components/player/Player";
import { MusicContextProvider } from "./hooks/useMusic";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deezer Music",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MusicContextProvider>
        <body className={inter.className}>
          {" "}
          <div className=" py-10">
            <Sidebar />

            <div className="main-container px-[30px] flex-grow pl-[150px] pt-20 md:pt-0">

              <main>{children}</main>
            </div>

            {/* <Player /> */}
          </div>
        </body>
      </MusicContextProvider>
    </html>
  );
}
