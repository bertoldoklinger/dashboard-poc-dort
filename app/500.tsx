import Link from 'next/link'



export default function Error() {

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whooops... Ocorreu um erro!</h1>
      <p className="text-accent-foreground">
        {' '}
        Voltar para a{' '}
        <Link href="/home" className="text-sky-600 dark:text-sky-400">
          Página Inicial
        </Link>
      </p>
    </div>
  )
}

