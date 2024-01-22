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
        <div className="fixed h-full">
          <Sidebar />
        </div>
        <div className="fixed w-full">
          <Header />
        </div>
        <div className="ml-[20%] flex w-[80%] overflow-y-auto pb-8 pl-10 pr-2 pt-44 2xl:ml-[15.5%] 2xl:w-[85.5%]">{children}</div>
      </section>
    </>
  )
}
