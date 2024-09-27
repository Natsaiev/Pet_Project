import { Box, Stack, Typography } from "@mui/material"
import { Layout } from "../layouts/Layout"
import { useSelector } from "react-redux"
import { ProductsCard } from "../components/ProductsCard"
import { useEffect, useState } from "react"

export const Sales = () => {
    const [shownProducts, setShownProducts] = useState([])
    const { products } = useSelector(state => state.products)
   
    const saleProducts = products.filter(item => item.discont_price)

  
    useEffect(() => {
        setShownProducts(saleProducts)
    }, [saleProducts])

    return (
        <Layout>
            <Stack>
                <Typography mb={5} variant="h2" sx={{ fontWeight: "700", paddingLeft: "40px" }}>Discounted items</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "70px", padding: "40px" }}>
                    {shownProducts.length > 0 
                        ? shownProducts.map(product => (
                            <Box key={product?.id} size={3}>
                                <ProductsCard page="sale" product={product} />
                            </Box>
                        )) 
                        : <Typography>No items found</Typography>
                    }
                </Box>
            </Stack>
        </Layout>
    )
}