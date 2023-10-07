import { NextResponse } from "next/server";
import prisma from '../../../../prisma/connection/connection'

export async function POST(request:Request,{params}:{params:{UpdateId:number}}){
    try {
        const payload = await request.json();

        const updatedProduct = await prisma.post.update({
            where: { id: Number(params.UpdateId) }, // Assuming there's an 'id' field in the payload
            data: {
              Price: Number(payload.Price),
              Type: payload.Type,
              Series: payload.Series,
              Size: payload.Size,
              Color: payload.Color,
              CompanyName: payload.CompanyName,
              ItemDescription: payload.ItemDescription,
              ItemType: payload.ItemType,
              ModelNo: payload.ModelNo,
              ProductUrl: payload.ProductUrl,
            },
          });

          return NextResponse.json({message:updatedProduct})
    } catch (error) {
        return NextResponse.json(error)
    }
}