/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-19 10:26:22
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-19 10:26:34
 * @FilePath: /landing-page/app/providers.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
