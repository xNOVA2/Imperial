import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export  async function GET(request:Request,{params}:{params:{id:number}}){
    try {
    
        let {id } = params
        
        
       const   data = await prisma.post.findUnique({where:{id:Number(id)}})
        if(data){
            return NextResponse.json({data:data})

        }
        
          
           else{
            return NextResponse.json({data:[]})
           }
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}