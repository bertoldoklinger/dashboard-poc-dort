import Image from "next/image"
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

import { Button } from "./ui/button"

export default function Header() {
  return (
    <div className=" absolute w-full pl-5 pr-2 pt-4">
      <header className="relative flex h-32 w-full items-center justify-between space-x-10 rounded-xl bg-white px-5">
        <Image src="/logo-emserh.png" alt="Logo" width={250} height={200} />
        <div className="flex items-end space-x-4 text-white">
          {/* Botão
            que realizará reset de estado em cada icon , passar o icon como props do botao shadcn ver forma de fazer
        */}
          <Button variant={"outline"} size={"icon"}>
            <ArrowUturnLeftIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <HomeIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Button>
        </div>
      </header>
    </div>
  )
}
