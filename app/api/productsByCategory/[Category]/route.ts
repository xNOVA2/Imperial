import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export  async function GET(request:Request,{params}:{params:{Category:string}}){
    try {
        let data;
        const { searchParams } = new URL(request.url)
        let PriceRange = searchParams.get('PriceRange')
        let Brand = searchParams.get('Brand')
        let Series = searchParams.get('Series')
        
       
            data = await prisma.post.findMany({where:{ItemType:params.Category}})
        
            if(PriceRange){
                data = data.filter((item)=>item.Price<=Number(PriceRange))
            }
            if(Brand){
                data = data.filter((item)=>item.CompanyName==Brand)
            }
            if(Series){
                data = data.filter((item)=>item.Series==Series)
            }
        
        if(data){
            return NextResponse.json({data})
        }

        return NextResponse.json({message:"No data found"})
    } catch (error) {
        return NextResponse.json({error:error})
    }
}