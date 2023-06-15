import data from "@/app/data";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Hey!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          {data.map((page, index) => (
            <Link key={index} href={page.uri}>
              {page.title}
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
