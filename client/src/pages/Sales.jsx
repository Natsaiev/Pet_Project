import { Box, Stack, Typography } from "@mui/material";
import { Layout } from "../layouts/Layout";
import { useSelector } from "react-redux";
import { ProductsCard } from "../components/ProductsCard";
import { useEffect, useState } from "react";
import { FilterComponent } from "../components/filter/FilterComponent";

export const Sales = () => {
    const [shownProducts, setShownProducts] = useState([]);
    const { products } = useSelector((state) => state.products);
    
    const saleProducts = products.filter((item) => item.discont_price);

    useEffect(() => {
        setShownProducts(saleProducts);
    }, [saleProducts]);

    
    const filterProducts = (products, filter) => {
        let filteredProducts = products;

        
        if (filter.priceFrom) {
            filteredProducts = filteredProducts.filter(
                (product) => product.discont_price >= filter.priceFrom
            );
        }
        if (filter.priceTo) {
            filteredProducts = filteredProducts.filter(
                (product) => product.discont_price <= filter.priceTo
            );
        }

       
        if (filter.sale) {
            filteredProducts = filteredProducts.filter(
                (product) => product.discont_price > 0
            );
        }

        
        switch (filter.sorted) {
            case "newest":
                filteredProducts = filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case "price: high-low":
                filteredProducts = filteredProducts.sort((a, b) => b.discont_price - a.discont_price);
                break;
            case "price: low-high":
                filteredProducts = filteredProducts.sort((a, b) => a.discont_price - b.discont_price);
                break;
            default:
                break;
        }

        return filteredProducts;
    };

    return (
        <Layout>
            <Stack>
                <Typography mb={5} variant="h2" sx={{ fontWeight: "700", paddingLeft: "40px" }}>
                    Discounted items
                </Typography>

                
                <FilterComponent sales={true} />

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "70px", padding: "40px" }}>
                    {shownProducts.length > 0 
                        ? shownProducts.map((product) => (
                            <Box key={product?.id} size={3}>
                                <ProductsCard page="sale" product={product} />
                            </Box>
                        )) 
                        : <Typography>No items found</Typography>
                    }
                </Box>
            </Stack>
        </Layout>
    );
};