import { useEffect, useState } from "react";
import { Layout } from "../layouts/Layout";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { ProductsCard } from "../components/ProductsCard"; // Исправлено на правильное название компонента
// import {Filter} from "../components/Filter"

export const Category = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]); // Исправлено название переменной
  const { categoryId } = useParams();

  // Получение продуктов по категории
  useEffect(() => {
    async function getProductsByCategory(id) {
      try {
        const response = await axios.get(`http://localhost:3333/categories/${id}`);
        setCategoryProducts(response.data);
        setShownProducts(response.data); // Исправлено на правильную переменную состояния
      } catch (error) {
        console.log(error.message);
      }
    }
    getProductsByCategory(categoryId);
  }, [categoryId]);

  return (
    <Layout>
      <Box>
        <Typography>{shownProducts?.category?.title}</Typography> {/* Исправлено на shownProducts */}
        {/* <Filter/> */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "70px", padding: "40px" }}>
          {shownProducts?.data?.length > 0 ? (
            shownProducts.data.map((product) => (
              <Box key={product?.id} size={3}>
                <ProductsCard page={categoryId} product={product} />
              </Box>
            ))
          ) : (
            <Typography>No products found</Typography>
          )}
        </Box>
      </Box>
    </Layout>
  );
};
