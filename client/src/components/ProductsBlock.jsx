import { ProductsCard } from "./ProductsCard";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductsBlock = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack direction="row" alignItems="center" mb={5} mr={4} >
        <Typography ml={4} variant="h2">
            Sale
        </Typography>
        <Box sx={{ flexGrow: 1, ml: 4 }}>
        <Divider sx={{ borderColor: "#ddd", borderBottomWidth: 2 }} />
      </Box>
        <Button
          style={{
            border: "1px solid gray",
            color: "#8B8B8B",
            fontSize: "14px",
            borderRadius: 8,
            borderColor: "#DDDDDD",
            fontWeight: "500",
            padding: "8px 16px"
          }}
          onClick={() => navigate("/sales")}
        >
          All Sales
        </Button>
      </Stack>
      <Stack direction="row" mb={13} ml={4} mr={4} justifyContent={"space-between"}>
        {product.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </Stack>
    </div>
  );
};