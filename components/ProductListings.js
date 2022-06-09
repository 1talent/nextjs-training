import ProductCard from "@/components/ProductCard";

// props
function ProductListings({ products }) {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => {
        // javascript map function
        console.log("product", product)
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}

export default ProductListings;
