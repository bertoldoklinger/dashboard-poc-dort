


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center scroll-smooth bg-gradient-to-b from-[#3596C0] to-[#90b83e] antialiased">
        {children}
      </main>
    </>
  )
}
