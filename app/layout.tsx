/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-19 09:55:28
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-19 10:28:12
 * @FilePath: /landing-page/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import "@/app/globals.css";
import { Providers } from "@/app/providers";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App10分钟搭建一个Landing Page",
  description:
    "在本文中，我们将 Next.js 13 + TailwindCSS + TypeScript 实现 Landing Page 的搭建.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
