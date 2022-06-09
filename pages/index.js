import ProductListings from "@/components/ProductListings";
import StoreHeading from '@/components/StoreHeading'
import { products } from "data";


export default function Home() {
  return (
    <div>
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  );
}
