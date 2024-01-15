

type InfoCardProps = {
  title: string
  value: number
}

export default async function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="flex h-44 flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-gray-800">
      <h1 className="text-center font-medium text-[#5D9CD5] dark:text-gray-200 md:text-lg lg:text-2xl">
        {title}
      </h1>
      <p className="text-5xl font-bold text-[#1F4E79] dark:text-gray-50">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
      </p>
    </div>
  )
}
