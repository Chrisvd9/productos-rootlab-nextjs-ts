import React, { GetStaticProps, NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { Iproduct, ProductList } from "../../components/Products/ProductsList";

interface TProps {
  products: Iproduct[];
  response: string;
}

const Movies: NextPage<TProps> = ({ products }) => {
  return (
    <ApplicationWrapper
      title="Products"
      description="Products of the rootlab products website"
    >
      <ProductList products={products} />
    </ApplicationWrapper>
  );
};

export default Movies;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    .then((res) => res.json())
    .then((data: Iproduct[]) => data.slice(0, 10))
    .catch((error) => console.error(error));

  return {
    props: {
      products,
    },

    revalidate: 10,
  };
};
