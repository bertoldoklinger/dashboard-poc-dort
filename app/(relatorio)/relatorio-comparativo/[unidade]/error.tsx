'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-white">Whooops... Ocorreu um erro fatal na aplicação!</h1>
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
