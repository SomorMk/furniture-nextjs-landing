import "./globals.css";
import { DM_Sans } from 'next/font/google'

export const metadata = {
  title: "Furniture Next App - Somor Mk",
  description: "Designed by Somor Mk",
};

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:description" content="Furniture Next Landing Page - Somor Mk" />
      </head>
      <body
        className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}
