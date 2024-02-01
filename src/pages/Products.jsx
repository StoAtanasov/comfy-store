import { Filters, PaginationContainer, ProductsContainer } from "../components";

export const loader = async ({ request }) => {
  return null;
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
