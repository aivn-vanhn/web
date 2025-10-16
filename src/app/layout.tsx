import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Vietnam - Nền tảng Giáo dục Thông minh",
  description:
    "AI Vietnam - Nền tảng giáo dục thông minh với AI, mang đến trải nghiệm học tập cá nhân hóa và hiệu quả",
  keywords: [
    "AI Vietnam",
    "giáo dục thông minh",
    "học tập với AI",
    "nền tảng giáo dục",
    "AI trong giáo dục",
    "học tập cá nhân hóa",
    "ExamDee",
    "học tiếng Anh",
    "trí tuệ nhân tạo",
    "edtech Vietnam",
    "Ken AI",
    "Hana AI",
    "giáo dục số",
    "học online",
    "AI tutor",
  ],
  authors: [{ name: "AI Vietnam" }],
  creator: "AI Vietnam",
  publisher: "AI Vietnam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ai-vietnam.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Vietnam - Nền tảng Giáo dục Thông minh",
    description:
      "Nền tảng giáo dục thông minh với AI, mang đến trải nghiệm học tập cá nhân hóa và hiệu quả cho mọi học sinh",
    url: "https://ai-vietnam.vn",
    siteName: "AI Vietnam",
    images: [
      {
        url: "/images/logo_image.png",
        width: 1200,
        height: 630,
        alt: "AI Vietnam - Nền tảng Giáo dục Thông minh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vietnam - Nền tảng Giáo dục Thông minh",
    description:
      "Nền tảng giáo dục thông minh với AI, mang đến trải nghiệm học tập cá nhân hóa và hiệu quả",
    images: ["/images/logo_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/images/huou.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/images/huou.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/huou.svg" sizes="180x180" />
        <link rel="shortcut icon" href="/images/huou.svg" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${nunito.variable} ${fredoka.variable} antialiased font-nunito`}
      >
        {children}
      </body>
    </html>
  );
}
