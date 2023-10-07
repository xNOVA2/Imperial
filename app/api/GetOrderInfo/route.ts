import { NextResponse } from "next/server";
import prisma from '../../../prisma/connection/connection'

export async function GET(request:Request){
    try {
        const orders = await prisma.order.findMany({
            include: {
              orderItems: true, 
            },
          });
          
          if(orders){
            return NextResponse.json({data:orders})
          }
          return NextResponse.json({message:"No Order"})
    } catch (error) {
        return NextResponse.json({message:error})
    }
}