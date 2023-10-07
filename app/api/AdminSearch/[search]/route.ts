import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export async function GET(request:Request,params:{params:{search:string}}) {
        try {

            const result = await prisma.post.findMany({where:{ModelNo:{contains:params.params.search}}})

            if(result){
                return NextResponse.json({data:result})
            }
            return NextResponse.json({message:"No result found"})
        } catch (error) {
            return NextResponse.json({message:error})
        }
}