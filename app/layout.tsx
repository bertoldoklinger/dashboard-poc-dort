import "@/styles/globals.css"
import { Metadata } from "next"
import { QueryClientProvider } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { queryClient } from "@/lib/react-query"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

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
      <html lang="pt" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-[#F0F4F7] font-sans antialiased dark:bg-zinc-900",
            fontSans.variable
          )}
        >
          <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </body>
      </html>
    </>
  )
}
