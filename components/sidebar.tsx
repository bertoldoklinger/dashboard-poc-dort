'use client'

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"


const navigation = [
  { name: 'HOSPITAL', href: '/hospital' },
  { name: 'HEMORREDE', href: '/hemorrede' },
  { name: 'UPA', href: '/upa' },
  { name: 'POLICLINICA', href: '/policlinica' },
  { name: 'CENTRAL DE REGULAÇÃO', href: 'centralderegulacao' },
  { name: 'CENTRO ESPECIALIZADO', href: 'centroespecializado' },
  { name: 'TEA', href: 'tea' },
  { name: 'FEME E LACEN', href: 'femelacen' },
  { name: 'OUTROS', href: 'outros' },
]


export function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#33B04F] px-6 dark:border-slate-600 dark:bg-slate-800">
      <nav className="flex flex-1 flex-col pt-48">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
          <span className='text-center text-2xl font-medium text-white'>MACROTIPOS</span>
          <li>
            <ul role="list" className="-mx-2 space-y-5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}

                    className={
                      'flex justify-center gap-x-3 rounded-full bg-gray-100 p-3 text-center text-lg font-semibold leading-6 text-[#548235] hover:bg-white hover:text-green-500 dark:bg-[#33B04F] dark:text-white'
                    }
                  >
                    {item.name}

                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex items-center justify-center p-4">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
