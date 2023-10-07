import { FetchProductsType } from "@/Types/type";
import SearchBox from "@/components/CompanySearch/SearchBox";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function UpdateAndDelete({searchParams}:{searchParams:{Search:string}}) {
  let result;
  if(searchParams.Search && searchParams.Search.length>1){
    
    const data = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminSearch/${searchParams.Search}`,{"cache":"no-cache"})
     result = await data.json();
    
  }
 
  
  return (
    <div>
           <nav className="flex justify-between px-4  items-center">
            <h1 className="text-2xl font-bold"><Link href={'/AdminPanel/AyanDashboard'}>Admin Dashboard </Link> </h1>
        <ul className="flex justify-items-center m-3 gap-4">
            <li><Button variant={"link"} className="text-sm"><Link href={'/AdminPanel/AyanDashboard/Update&Delete'} > Update / Delete Products</Link></Button></li>
            <li><Button variant={"link"}>Check Orders</Button></li>
            <li><Button variant={"link"}><Link href={'/AdminPanel/AyanDashboard/AddProduct'}> Add new Product</Link></Button></li>

        </ul>
        </nav>
        <div className="p-5">
        <SearchBox/>
        </div>
        <div>
          {result?.data?.map((item:FetchProductsType,index:number)=>{
            return(
              <>
             <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className=" mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
          width={500}
          height={500}
            alt=""
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={item.ProductUrl}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            
              
            <div className="flex items-center justify-between">
            <DeleteBtn id={item.id} key={item.id}/>
            </div>
            <br />
            <Button>
              <Link href={`/AdminPanel/AyanDashboard/Update&Delete/${item.id}`}>Update</Link>
              
            </Button>
          </div>
        </div>
      </div>
    </section>
              </>
            )
          })}
        </div>
  </div>
  )
}
