import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <section className="relative flex min-h-screen">
        <Sidebar />
        <Header />
        <div className="flex w-[84.5%] pb-8 pl-10 pr-2 pt-44">{children}</div>
      </section>
    </>
  )
}
