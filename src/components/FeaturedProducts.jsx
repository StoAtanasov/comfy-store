import ProductGrids from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return <div className="pt-24">
    <SectionTitle text="featured products" />
    <ProductGrids />
  </div>;
};
export default FeaturedProducts;
