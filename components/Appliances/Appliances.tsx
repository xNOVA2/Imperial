import Image from "next/image";
import HomeAppliance from '../../public/HomeAppliance.jpg';
import KitchenAppliance from '../../public/KitchenAppliances.jpg';
import Link from "next/link";

const Appliances = () => {
  return (
    <div className="flex justify-center gap-4 mx-5">
      <div className="transform transition-transform hover:scale-105 ease-in-out">
        <Link href={'/Products/Home-Appliances'}><Image src={HomeAppliance} alt="HomeAppliance" width={500} height={200} className="rounded-md cursor-pointer" /></Link>
      </div>
      <div className="transform transition-transform hover:scale-105 ease-in-out">
      <Link href={'/Products/Kitchen-Appliances'}><Image src={KitchenAppliance} alt="HomeAppliance" width={500} height={200} className="rounded-md cursor-pointer" /></Link>
      </div>
    </div>
  );
};
export default Appliances;
