import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../layouts/Layout";
import { getTotal } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { NotificationCart} from "../components/cart/NotificationCart";
import { Box, Stack, Typography, Button, Divider, } from "@mui/material";
import {styled } from '@mui/material/styles';
import { CartProductCard } from "../components/cart/CartProductCards";
import { OrderDetails } from "../components/cart/OrderDetails";



export const LinkBorderBtn = styled(Button)({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    minWidth: 140,
    padding: "8px 16px",
    color: "#8B8B8B",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer"
})


export const Cart = () => {
    const { productsInCart = [], total = 0 } = useSelector((state) => state.cart || {});
    const dispatch = useDispatch();
    const handleClickOpen = () => setOpen(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getTotal());
    }, [dispatch]);

    return (
        <Layout>
            <Stack Stack sx={{ padding: 4 }}>
                <NotificationCart open={open} setOpen={setOpen} />
                <Stack direction="row" alignItems="center" mb={5} >
                    <Typography variant="h2" sx={{  mr: 5, fontWeight: 700 }}>Shopping cart</Typography>
                    <Stack direction="row" alignItems="center" >
                    <Box sx={{ flexGrow: 1, ml: 4 }}>
                        <Divider sx={{ borderColor: "#ddd", borderBottomWidth: 2, width: "1150px", mr: 1 }} />
                    </Box>
                        <Link to="/"><LinkBorderBtn sx={{ width: "100%" }}>Back to the store</LinkBorderBtn></Link>
                    </Stack>
                </Stack>
                {productsInCart.length > 0 ?
                    <Stack container direction={{ xxs: "column", xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} spacing={4} sx={{ gap: { xxs: 0, xs: 0, sm: 0, md: 4, lg: 4, xl: 8 } }}>
                        <Box size={"auto"} sx={{ minWidth: { md: 370, lg: 480, xl: 548 } }  }>
                            {productsInCart.map(product => (
                                <CartProductCard key={product.id} product={product} />
                            ))}
                        </Box>
                        <Box size="auto" mb={5} sx={{ minWidth: { md: 370, lg: 480, xl: 548 } }}>
                            <OrderDetails items={productsInCart.length} total={total} handleClickOpen={handleClickOpen} />
                        </Box>
                    </Stack> :
                    <Stack mb={8}>
                        <Typography mb={4}>Looks like you have no items in your basket currently.</Typography>
                        <Link to="/products">
                            <Button variant="contained" sx={{ padding: "8px 32px", fontWeight: 600 }}>Continue shopping</Button>
                        </Link>
                    </Stack>
                }
            </Stack>
        </Layout>
    );
}