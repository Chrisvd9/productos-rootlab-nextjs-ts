import Product from "./Product";

export interface Iproduct {
  id: number;
  title: string;
  description: string | null;
  price: number;
  discountPercentage: number | null;
  rating: number | null;
  stock: number | null;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

interface Props {
  products: Iproduct[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className="flex flex-col justify-center text-black items-center p-6">
      <h1 className="self-start text-4xl bold mb-6 p-5">
        Offers <a className="text-xl text-blue-500 m-2" href="#">See all</a>
      </h1>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
