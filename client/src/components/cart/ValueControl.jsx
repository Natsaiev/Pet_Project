import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart, getTotal } from "../../store/cartSlice";
import { Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


export const MinusButton = styled('button')({
    position: "absolute",
    top: 0,
    left: 0,
    width: 58,
    height: 58,
    borderRadius: 8,
    border: "1px solid #DDDDDD",
    borderTop: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    color: "#8B8B8B",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#F5F5F5",
    }
})

export const PlusButton = styled('button')({
    position: "absolute",
    top: 0,
    right: 0,
    width: 58,
    height: 58,
    borderRadius: 8,
    border: "1px solid #DDDDDD",
    borderTop: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    color: "#8B8B8B",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#F5F5F5",
    }
})

export const ValueControl = ({ page, product, quantity, setQuantity }) => {
    const dispatch = useDispatch();
    
    const handleMinus = () => {
        if (page === "cart") {
            if (quantity >= 1) {
                dispatch(changeQuantity({ ...product, quantity: quantity - 1 }));
                dispatch(getTotal());
            }
            if (quantity === 0) {
                dispatch(removeFromCart(product.id));
                dispatch(getTotal());
            }
        } else {
            if (quantity !== 0) {
                setQuantity(quantity - 1);
            }
        }
    };

    const handlePlus = () => {
        if (page === "cart") {
            dispatch(changeQuantity({ ...product, quantity: quantity + 1 }));
            dispatch(getTotal());
        } else {
            setQuantity(quantity + 1);
        }
    };

    return (
        <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="center"
            sx={{ 
                position: "relative", 
                width: 200, 
                height: 58, 
                border: "1px solid #DDDDDD", 
                borderRadius: 2, 
                borderLeft: "none", 
                borderRight: "none" 
            }}
        >
            <MinusButton onClick={handleMinus}>-</MinusButton>
            <PlusButton onClick={handlePlus}>+</PlusButton>
            <Typography>{quantity}</Typography>
        </Stack>
    );
};