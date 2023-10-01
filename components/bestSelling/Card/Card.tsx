
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../ui/button';

interface CardProps {
  id:number
  img: string;
  title?: string;
  description?: string;
  price: number;
  Comapny:string
  ModelNumber:string
}

export default function Card({img,title,description,price,id,Comapny,ModelNumber}: CardProps) {
  return (
    <div className=' rounded-md border-2'>
      <Link href={''} className="group relative block" prefetch={false}>
        <div className="relative min-h-[320px] sm:min-h-[350px]">
          <Image
        
          fill={true}
            src={img}
            alt="error"
            className="absolute inset-0 h-full w-full rounded-lg"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className=" font-bold text-black ">{title}</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            {description}
          </p>

          {/* <AddtoCartt
          modelNumber={ModelNumber}
          Comapny={Comapny}
          image={img}
          price={price}
          title={title}
          id={id}
          /> */}
          <Button variant={'secondary'} className='bg-blue-400 hover:bg-blue-300 text-white'>View All </Button>
        </div>
      </Link>
    </div>
  );
}
