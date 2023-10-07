"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

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
import { useRouter } from "next/navigation"
import { Router } from "next/router"

const frameworks = [
  {
    value: "haier",
    label: "HAIER",
  },
  {
    value: "dawlance",
    label: "DAWLANCE",
  },
  {
    value: "tcl",
    label: "TCL",
  },
  {
    value: "super-asia",
    label: "SUPER-ASIA",
  },
  {
    value: "boss",
    label: "Boss",
  },
  {
    value: "westpoint",
    label: "WESTPOINT",
  },
  {
    value: "pel",
    label: "PEL",
  },
  {
    value: "gree",
    label: "GREE",
  },
]

export function Search() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
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
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select By Company..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Select By Company." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
              
                key={framework.value}
                onSelect={(currentValue:any) => {
                  setValue(currentValue === value ? "" : currentValue)
                  router.push(`/CompanyProduct/${String(currentValue).toUpperCase()}`)
                  setOpen(false)
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
