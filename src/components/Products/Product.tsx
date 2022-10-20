import Link from "next/link";
import React, { FC } from "react";
import { Iproduct } from "../Products/ProductsList";

interface TProps {
  product: Iproduct;
}

const Product: FC<TProps> = ({ product }) => {
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <div className="card flex justify-center text-black">
          <div className="rounded-lg shadow-2xl bg-white max-w-sm">
            <img
              className="img-products cursor-pointer rounded-t-lg"
              src={product.thumbnail}
              alt={`${product.title} Poster`}
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {product.title}
              </h5>
              <p className="text-gray-700 text-xl mb-4">
                Rating: {product.rating}
              </p>
              <p className="text-gray-700 text-xl mb-4">$ {product.price}</p>
              <button className="btn-primary bg-black mt-2 text-white font-bold w-full p-3 border-none hover:bg-white cursor-pointer hover:text-black transition ease-out">
                Buy product
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;