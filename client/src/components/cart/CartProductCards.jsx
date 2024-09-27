import { Box, Stack, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getQuantity } from "../../utils";
import { ValueControl } from "../cart/ValueControl";
import { getTotal, removeFromCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export const CartProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart.productsInCart);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(getQuantity(productsInCart, product.id));
    }, [productsInCart, product]);

    return (
        <Stack direction="row" spacing={2} sx={{ border: "1px solid #DDDDDD", borderRadius: 2, padding: 2, alignItems: "center", width: "100%", mb: 2, minWidth: 900}}   >
            <Box sx={{  borderRadius: 2, overflow: "hidden" }}>
                <img src={`http://localhost:3333${product.image}`} alt={product.title} style={{height: 180,  objectFit: "cover" }} />
            </Box>
            <Stack sx={{ flexGrow: 1, justifyContent: "space-between", gap: 7 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" sx={{ "&:hover": { textDecoration: "underline" } }}>{product.title}</Typography>
                    </Link>
                    <CloseIcon onClick={() => {
                        dispatch(removeFromCart(product.id));
                        dispatch(getTotal());
                    }} style={{ cursor: "pointer" }} />
                </Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                    <ValueControl page="cart" product={product} quantity={quantity} />
                    {product.discont_price ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h3" sx={{ mr: 1, fontWeight: 600 }}>${product.discont_price}</Typography>
                            <Typography variant="h5" sx={{ textDecoration: 'line-through', color: 'gray' }}>${product.price}</Typography>
                        </Box>
                    ) : (
                        <Typography variant="h6">${product.price}</Typography>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};