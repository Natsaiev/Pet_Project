import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../layouts/Layout";
import { Box, Stack, Typography, Button } from "@mui/material";
import { ValueControl } from "../components/cart/ValueControl";
import { addToCart, getTotal } from "../store/cartSlice";
import { styled } from '@mui/material/styles';
import { getDiscount } from "../store/selectors";


export const SaleBadge = styled('div')({
    position: "absolute",
    top: 16,
    right: 16,
    width: 68,
    height: 34,
    backgroundColor: "#0D50FF",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 2
})


export const Product = () => {   
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { productsInCart } = useSelector((state) => state.products);
  const descriptionRef = useRef(null);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const API_URL = "http://localhost:3333/";
  const discount = getDiscount(product?.price, product?.discont_price);
  const [isExpanded, setIsExpanded] = useState(false);
  // Получение продукта по ID
  useEffect(() => {
    async function getProduct(id) {
      try {
        const response = await axios.get(`${API_URL}products/${id}`);
        setProduct(response.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct(productId);
  }, [productId]);


  const readMore = (e) => {
    descriptionRef.current.style.height = "auto";
    e.target.style.display = "none";
  };

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };


  return (
    <Layout>
        <Stack gap={10} direction="row" justifyContent="center"   padding={5}>
          <Box sx={{ width: 548, height: 542 }}>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              src={`${API_URL}/${product?.image}`}
              alt={`${product?.title?.slice(0, 18)}...`}
            />
          </Box>
          <Stack direction="column" alignItems={"flex-start"} gap={3} sx={{ width: "50%", padding: 0 }}>
            <Typography mb={5} variant="h3" >
              {product?.title}
            </Typography>
            <Stack direction="row" alignItems="flex-end" mb={4}>
              {product.discont_price ? (
                <>
                  <Typography variant="h2" mr={4}>
                    ${product.discont_price}
                  </Typography>
                  <Typography variant="crossed" sx={{ fontSize: 35, textDecoration: "line-through", color: "#8B8B8B" }} mr={2} >
                    ${product.price}
                  </Typography>
                  <SaleBadge
                    style={{ position: "static", alignSelf: "flex-start" }}
                  >
                    -{discount}%
                  </SaleBadge>
                </>
              ) : (
                <Typography variant="h2" mr={4}>
                  ${product.price}
                </Typography>
              )}
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center" mb={4}>
              <ValueControl
                page="product"
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
              />
              <Button
                variant="contained"
                disabled={!quantity}
                onClick={() => {
                  dispatch(addToCart({ ...product, quantity }));
                  dispatch(getTotal());
                }}
                sx={{ width: 316, height: 58, ml: 4, fontSize: 20 }}
              >
                Add to cart
              </Button>
            </Stack>
            <Typography mb={2}>Description</Typography>
            <Typography
        sx={{
          fontSize: 16,
          lineHeight: 2,
          maxHeight: isExpanded ? "none" : 100,
          overflow: "hidden",
          fontWeight: 500,
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "none" : 3, 
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
          transition: "max-height 0.5s ease",
        }}
        ref={descriptionRef}
        variant="description"
      >
        {product?.description}
      </Typography>
      
      <Typography
        onClick={toggleReadMore}
        sx={{ textDecoration: "underline", fontSize: 16, cursor: "pointer" }}
      >
        {isExpanded ? "Show less" : "Read more"}
      </Typography>
          </Stack>
        </Stack>
      
    </Layout>
  );
};