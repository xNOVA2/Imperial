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
import {categories} from '@/components/Categories'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function SheetProduct({isChecked,Text}:{isChecked:boolean,Text:string | ReactNode }) {
  return (
<>

<Sheet >
              <SheetTrigger asChild className="">
             
                <Button className={`${isChecked ? 'lg:hidden' : null} `} variant="outline" >{Text}</Button>
               
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle >Filter</SheetTitle>
                  <SheetDescription>
                    <div className="pt-2">
                    <hr />
                    <hr />
                    </div>
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-2 py-4">
                  {categories.map((item:any,index:number) => (
                    <div className="" key={index}>
                      <Link href={`/Products/${item.link}`} className=" text-slate-900 hover:text-slate-700 text-sm">
                        {item.name}
                      </Link>
                    </div>
                  ))}
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
