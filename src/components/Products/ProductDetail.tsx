import { FC } from "react";
import Link from "next/link";
import { Iproduct } from "./ProductsList";
import Image from "next/image";

interface ProductProps {
  product: Iproduct;
}

export const ProductDetail: FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg  shadow-2xl mx-auto mt-4">
        <Image
          className=""
          src={product.thumbnail}
          alt={`${product.title} Poster`}
          width={1000}
          height={0}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-2xl font-medium mb-2">
            {product.title}
          </h5>
          <p className="text-gray-700 text-xl mb-4">Rating: {product.rating}</p>
          <p className="text-gray-700 text-xl mb-4">{product.brand}</p>
          <p className="text-gray-700 text-xl mb-4">$ {product.price}</p>
          <p className="text-gray-700 text-xl mb-4">
            Category: {product.category}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Description: {product.description}
          </p>
        </div>
      </div>

      <div className="flex justify-center text-black mx-auto">
        <div className="block rounded-lg shadow-2xl bg-white max-w-sm text-center mt-4 p-5">
          <div className="py-3 px-6 border-b border-gray-300">
            <strong className="text-3xl">{product.title}</strong>
          </div>
          <div className="p-6">
            <h5 className="text-2xl">Brand: {product.brand}</h5>
            <p className="text-2xl">Stock: {product.stock}</p>
            <p className="text-2xl">Price: ${product.price}</p>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <button className="bg-black mt-2 text-white font-bold w-full p-3 hover:bg-white cursor-pointer hover:text-black transition ease-out">
              Add to cart
            </button>
            <Link href="/products">
              <button className="bg-black mt-2 text-white font-bold w-full p-3 hover:bg-white cursor-pointer hover:text-black transition ease-out">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
