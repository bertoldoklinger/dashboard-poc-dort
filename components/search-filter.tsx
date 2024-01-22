
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from 'lucide-react'

export function SearchFilter() {
  return (
    <form action="" className="flex items-center gap-3">
      <Input name="unidade" placeholder="Nome da unidade hospitalar" />
      <Input name="cargo" placeholder="Nome do cargo" />
      <Button type="submit" variant={'link'} className="whitespace-nowrap">
        <Search className='mr-2 size-5' />
        Filtrar resultados
      </Button>
    </form>
  )
}
