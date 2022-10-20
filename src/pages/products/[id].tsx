import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { ProductDetail } from "../../components/Products/ProductDetail";
import { Iproduct } from "../../components/Products/ProductsList";

interface TProps {
  product: Iproduct;
}

const ProductDetailPage: NextPage<TProps> = ({ product }) => {
  return (
    <ApplicationWrapper
      title={product.title}
      description={product.description || undefined}
    >
      <ProductDetail product={product} />
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/products/" + context.params?.id
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;
