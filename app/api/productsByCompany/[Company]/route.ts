import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export  async function GET(request:Request,{params}:{params:{Company:string}}){
    try {
        let data;
        const { searchParams } = new URL(request.url)
        let Search = searchParams.get('Search')
  
        
       
            data = await prisma.post.findMany({where:{CompanyName:params.Company}})
            if (Search) {
                const searchLower = Search.toLowerCase(); 
                if (params.Company === 'WESTPOINT' || params.Company === "ANEX") {
                  data = data.filter((newData) => newData.Series.toLowerCase() === searchLower);
                } else if (Search) {
                  data = data.filter((newData) => newData.ItemType.toLowerCase() === searchLower);
                }
              }
          

        if(data){
            return NextResponse.json({data})
        }

        return NextResponse.json({message:"No data found"})
    } catch (error) {
        return NextResponse.json({error:error})
    }
}