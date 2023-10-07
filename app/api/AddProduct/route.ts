import { NextResponse } from "next/server";
import prisma from '../../../prisma/connection/connection'
export async function POST(request:Request){
    try {
        const payload = await request.json();
        
        const updatedProduct = await prisma.post.create({
        
            data: {
                ModelNo: payload.ModelNo,
              Price: Number(payload.Price),
              Type: payload.Type,
              Series: payload.Series,
              Size: payload.Size,
              Color: payload.Color,
              CompanyName: payload.CompanyName,
              ItemDescription: payload.ItemDescription,
              ItemType: payload.ItemType,
             
              ProductUrl: payload.ProductUrl,
            },
          });

          return NextResponse.json({message:"Product Added"},{status:200})
    } catch (error) {
        return NextResponse.json(error)
    }
}