import { Box, Typography } from "@mui/material";
import { Layout } from "../layouts/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductsCard } from "../components/ProductsCard";
import { filter } from "../utils";
import { FilterComponent } from "../components/filter/FilterComponent";

export const Products = () => {
  const [shownProducts, setShownProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  const filterObject = useSelector(state => state.filter)



  useEffect(() => {
    const result = filter(filterObject, products)
    setShownProducts(result)
}, [filterObject, products])


  useEffect(() => {
    if (products?.length > 0) {
      setShownProducts(products);
    }
  }, [products]);

  return (
    <Layout>
      <Box>
        <Typography variant="h1" sx={{ fontWeight: "700", paddingLeft: "40px" }}>
          All Products
        </Typography>
        <FilterComponent />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "70px", padding: "40px" }}>
          {shownProducts.length > 0 ? (
            shownProducts.map((product) => (
              <Box key={product?.id} size={3}>
                <ProductsCard page="products" product={product} />
              </Box>
            ))
          ) : (
            <Typography>No items found</Typography>
          )}
        </Box>
      </Box>
    </Layout>
  );
};