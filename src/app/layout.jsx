import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "home",
  description: "nextjs starter template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
