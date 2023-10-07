'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useCallback } from 'react';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter, Trash } from "lucide-react";

export default function FilterSheet({ CompanyName, SeriesName }: { CompanyName: unknown[], SeriesName: unknown[] }) {
  const pathname = usePathname();
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const deleteQuery = (key: string, value: string) => {
    params.delete(key)
    const newSearchParams = params.toString();
    const newUrl = `${pathname}?${newSearchParams}`;
    router.push(newUrl);

  }
  return (
    <>

      <Sheet>
        <SheetTrigger asChild className="">
          <Button className='font-semibold ' variant="outline"  ><Filter />Filter</Button>
        </SheetTrigger>
        <SheetContent side={`left`} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <SheetHeader>
            <SheetTitle >Filter Functionality</SheetTitle>
            <SheetDescription>
              <div className="pt-2">
                <hr />
                <hr />
              </div>
            </SheetDescription>
          </SheetHeader>
          {/* Select Component */}
          <Select onValueChange={(value) => { router.push(pathname + '?' + createQueryString('PriceRange', value)) }}>
            <h1 className="font-bold text-2xl mt-2">Price Filter</h1>
            <SelectTrigger className="w-[180px] mt-3">
              <SelectValue placeholder="Select Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="">Reset</SelectItem>
                <SelectItem value="5000"> Below  5000 </SelectItem>
                <SelectItem value="10000"> Below  10000 </SelectItem>
                <SelectItem value="20000"> Below  20000 </SelectItem>
                <SelectItem value="30000"> Below  30000 </SelectItem>
                <SelectItem value="50000"> Below    50000 </SelectItem>
                <SelectItem value="100000"> Below  100000 </SelectItem>
                <SelectItem value="150000"> Below  150000 </SelectItem>
                <SelectItem value="200000"> Below  200000 </SelectItem>
                <SelectItem value="300000"> Below  300000 </SelectItem>
                <SelectItem value="600000"> Below  600000 </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Select Componet End */}
          <hr className="px-4 mt-2" />
          <div>
            <h1 className="font-bold text-2xl mt-2">Brands</h1>
            <ul>
              {CompanyName.map((company, index) => {
                const paramValue = String(company);
                const isActive = searchParams.get('Brand') === paramValue;
                return (
                  <div key={index}>
                    <Link
                      className="text-xs font-semibold"

                      href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('Brand', String(company))
                      }
                    >
                      {String(company)}
                    </Link>
                    {isActive && (
                      <button onClick={() => deleteQuery('Brand', String(company))} className="ml-2 text-red-500">
                        <Trash size={15} />

                      </button>
                    )}
                  </div>
                )
              })}
            </ul>
          </div>
          <hr className="px-4" />
          <div>
            <h1 className="font-bold text-2xl ">Types</h1>
            <ul className="flex-col gap-1">
              {SeriesName.map((Series, index) => {
                const paramValue = String(Series);
                const isActive = searchParams.get('Series') === paramValue;
                return (
                  <div key={index}>
                    <Link
                      className="text-xs font-semibold"

                      href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('Series', String(Series))
                      }
                    >
                      {String(Series)}
                    </Link>
                    {isActive && (
                      <button onClick={() => deleteQuery('Series', String(Series))} className="ml-2 text-red-500">
                        <Trash size={15} />
                      </button>
                    )}
                  </div>
                )
              })}
            </ul>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" variant={"outline"}>Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
