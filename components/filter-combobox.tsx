"use client"

import * as React from "react"
import { useState } from "react"
import { hospitals } from "@/utils/hospitais"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface FilterComboboxProps {
  value?: string
  onChange: (value: string) => void
}

export function FilterCombobox({ value, onChange }: FilterComboboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? hospitals.find((hospital) => hospital.value === value)?.label
            : "Todos"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Filtrar por..." />
          <CommandEmpty>Hospital não encontrado</CommandEmpty>
          <CommandGroup>
            {hospitals.map((hospital) => (
              <CommandItem
                key={hospital.value}
                value={hospital.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === hospital.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {hospital.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
