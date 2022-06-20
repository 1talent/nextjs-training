import ProductListings from "@/components/ProductListings";
import StoreHeading from '@/components/StoreHeading'
import { getAllProductsInCollection } from "@/lib/shopify";
// import { products } from "data";


export default function Home({products}) {
  console.log(products)
  return (
    <div>
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection()

  return {
    props: {
      products
    },
  }
}