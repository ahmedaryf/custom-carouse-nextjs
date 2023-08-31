import Providers from "../../Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keyodhoo | Shipwreck | Guesthouse | holiday",
  description:
    "This website provides usefull information for travellers those seeking to stay in local Islands",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
