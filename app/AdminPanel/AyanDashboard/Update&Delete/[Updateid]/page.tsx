import ProductUpdateForm from "@/components/UpdateForm/UpdataForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page({params}:{params:{Updateid:number}}) {
  return (
    <div>  <nav className="flex justify-between px-4   items-center">
    <h1 className="text-2xl font-bold"><Link href={'/AdminPanel/AyanDashboard'}>Admin Dashboard </Link> </h1>
<ul className="flex justify-items-center m-3 gap-4">
    <li><Button variant={"link"} className="text-sm"><Link href={'/AdminPanel/AyanDashboard/Update&Delete'} > Update / Delete Products</Link></Button></li>
    <li><Button variant={"link"}>Add new Product</Button></li>
</ul>
</nav>
    <ProductUpdateForm productId={params.Updateid} key={params.Updateid}/>
</div>
  )
}
