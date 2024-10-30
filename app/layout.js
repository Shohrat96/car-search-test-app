import Head from "next/head";
import "./globals.css";


export const metadata = {
  title: "Car Search Application",
  description: "Car Search and Filter Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
