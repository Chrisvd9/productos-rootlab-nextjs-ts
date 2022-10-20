import React, { useEffect, useState } from "react";
import Product from "./Product";

export interface Iproduct {
  id: number,
  title: string,
  description: string | null,
  price: number,
  discountPercentage: number | null,
  rating: number | null,
  stock: number | null,
  brand: string,
  category: string,
  thumbnail: string,
  images: string
}

const useProducts = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then((res) => res.json())
      .then((data: Iproduct[]) => setProducts(data.slice(0, 20)))
      .catch((error) => console.error(error));
    }, []);
    
    console.log(products);
    return products;
  };
  
export const ProductList = () => {
  const products = useProducts();
  return (
    <div className="flex flex-col justify-center text-black items-center p-6">
      <h1 className="text-4xl bold mb-6 border-b-2 b border-gray-300">Latest products</h1>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
