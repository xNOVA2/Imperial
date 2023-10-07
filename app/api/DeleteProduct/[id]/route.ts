import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export async function DELETE(request:Request,{params}:{params:{id:number}}){
    try {
        const data = await prisma.post.delete({where:{id:Number(params.id)}})
      return  NextResponse.json({message:"Deleted"},{status:200})
    } catch (error) {
        return  NextResponse.json({message:error})

    }
}