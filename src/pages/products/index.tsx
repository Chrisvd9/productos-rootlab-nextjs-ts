import React, { NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { ProductList } from "../../components/Products/ProductsList";

interface TProps {
  response: string;
}

const Movies: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper
      title="Products"
      description="Products of the rootlab products website"
    >
      <ProductList />
    </ApplicationWrapper>
  );
};

export default Movies;
