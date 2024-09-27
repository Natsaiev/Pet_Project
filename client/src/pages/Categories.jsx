import { useSelector } from "react-redux";
import { getCategories } from "../store/selectors";
import { Layout } from "../layouts/Layout";
import { CategoryCard } from "../components/CategoryCard";
import { Box, Typography } from "@mui/material";

export const Categories = () => {
  const categories = useSelector(getCategories);

  return (
    <Layout>
      <Typography variant="h1" sx={{ fontWeight: "700", paddingLeft: "40px" } }>Categories</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "70px", padding: "40px" }}>
        
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
        ))}
        </Box>
    </Layout>
  );
};
