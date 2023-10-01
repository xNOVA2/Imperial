import { ProductCard } from "../Export";
import { products2 } from '@/Common/Products';

export default async function ExtraProducts() {
  return (
    <>
     {products2.map((product:any, index:number) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          image1={product.image1}
          image2={product.image2}
        />
      ))}
    </>
  )
}
