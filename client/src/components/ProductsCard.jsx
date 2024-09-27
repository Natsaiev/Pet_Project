import { Box, Typography, Stack, Button, Snackbar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { DiscountIcon } from "./DiscountIcon";
import { getDiscount, getQuantity } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import React, { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { API_URL } from "../store/actionCreators";

export const ProductsCard = ({ product }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const dispatch = useDispatch();
    const discount = getDiscount(product?.price, product?.discont_price);
    const addBtnRef = useRef(null);
    const cartState = useSelector(state => state.cart);
    const { productsInCart } = cartState;

    const handleClick = (e) => {
        e.preventDefault(); // предотвращаем переход по ссылке
        setSnackbarOpen(true);
        let quantity = getQuantity(productsInCart, product.id);
        dispatch(addToCart({ ...product, quantity: ++quantity }));
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Added to the cart"
                action={action}
            />
            <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>
                <Stack direction="column" alignItems="flex-start" gap={2} border={"1px solid #DDDDDD"} borderRadius={3} sx={{ width: 400 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: "100%",
                            height: 430,
                            borderRadius: '10px 10px 0 0',
                            borderBottom: "1px solid #DDDDDD",
                            overflow: "hidden",
                            transition: "transform 0.4s",
                            "&:hover": {
                                transform: "scale(1.02)",
                            },
                        }}
                        onMouseOver={() => addBtnRef.current.style.display = "block"}
                        onMouseLeave={() => addBtnRef.current.style.display = "none"}
                    >
                        {product.discont_price && <DiscountIcon>-{discount}%</DiscountIcon>}
                        <img
                            style={{ width: "100%", height: "100%" }}
                            alt={`${product.title}`}
                            src={`${API_URL}${product.image}`}
                        />
                        <Button variant="contained" ref={addBtnRef} hidden
                            onClick={handleClick} 
                            sx={{
                                display: "none",
                                position: "absolute",
                                top: 350,
                                right: 60,
                                zIndex: 5,
                                width: 284,
                                height: 58,
                                "&:hover": {
                                    backgroundColor: "#282828"
                                }
                            }}>
                            <Typography>Add to cart</Typography>
                        </Button>
                    </Box>
                    <Typography
                        style={{
                            color: "#282828",
                            fontWeight: "500",
                            fontSize: 20,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            padding: "0 0 0 32px",
                        }}
                    >
                        {product.title}
                    </Typography>
                    <Stack direction="row" alignItems="flex-end" gap={2} sx={{ paddingLeft: 4, paddingBottom: 4, width: "100%" }}>
                        {product.discont_price ? <>
                            <Typography sx={{ color: "#282828" }} variant="h3">${product.discont_price}</Typography>
                            <Typography sx={{ color: "#8B8B8B", textDecoration: "line-through", fontSize: "25px" }} variant="crossed">${product.price}</Typography>
                        </> : <Typography sx={{ color: "#282828" }} variant="h3">${product.price}</Typography>}
                    </Stack>
                </Stack>
            </Link>
        </div>
    );
};