import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";



export async function POST(request:Request){
  try {
    let payload =  await request.json()
    
    console.log(payload);
    
    const order = await prisma.order.create({
        data: {
          Name: payload.name,
          Email: payload.email,
          PhoneNumber: payload.phone,
          Address: payload.address,
          City: payload.city,
          postalCode:payload.postalCode,
          totalPrice:payload.totalPrice,
          orderItems: {
            create: payload.orderItems, // Assuming orderItems is an array of objects
          },
        },
      });
      console.log(order);


    return NextResponse.json({data:"Order Created"})
    } catch (error) {
    return NextResponse.json({error:error})
    }
}