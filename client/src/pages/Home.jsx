import { Layout } from "../layouts/Layout";
import { FirstBanner } from "../components/FirstBanner";
import { useSelector } from "react-redux";
import { selectRandomCategory } from "../store/selectors";
import { CategoryBlock } from "../components/CategoryBlock";
import { getRandomProduct } from "../store/selectors";
import { CategoryCard } from "../components/CategoryCard";
// import { ProductCard } from "../components/ProductCard";
import FormDiscont from "../components/FormDiscont/FormDiscont";
import { ProductsBlock } from "../components/ProductsBlock";

export const Home = () => {
  const randomCategories = useSelector(selectRandomCategory);

  const randomProducts = useSelector(getRandomProduct);

  useSelector((state) => {
    console.log(state);
  });

  return (
    <Layout>
      <FirstBanner />
      <CategoryBlock categories={randomCategories} />
      <FormDiscont />
      <ProductsBlock product={randomProducts} />
      </Layout>
  );
};
