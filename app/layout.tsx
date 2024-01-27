import "@/styles/globals.css"
import { Metadata } from "next"
import { QueryClientProvider } from "@tanstack/react-query"
import { NextUIProvider } from "@nextui-org/react";

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { queryClient } from "@/lib/react-query"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen scroll-smooth bg-[#F0F4F7] font-sans antialiased dark:bg-[#0B1120]",
            fontSans.variable
          )}
        >
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
  )
}
