import { SkeletonCard, SkeletonInfoCard } from "./components/skeleton"

export default function LoadingPage() {
  return (
    <section className="max-h-screen w-full space-y-8">
      <header className="flex h-20 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[38px]">
          DADOS GERAIS REDE EMSERH
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-9">
        <SkeletonInfoCard />
        <SkeletonInfoCard />
        <SkeletonInfoCard />
        <SkeletonInfoCard />
        <SkeletonInfoCard />
        <SkeletonInfoCard />
      </div>
      <div className="grid max-h-[28rem] grid-cols-3 gap-9"></div>
    </section>
  )
}
