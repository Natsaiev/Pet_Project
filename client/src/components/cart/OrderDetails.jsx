import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import { OrderForm } from "./OrderForm";

export const OrderDetails = ({ items, total, handleClickOpen }) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ backgroundColor: theme.palette.extra.main, borderRadius: 2, padding: 3 }}>
            <Typography variant="h2" mb={2} fontWeight={700}>Order details</Typography>
            <Typography variant="h4" fontWeight={500} sx={{color: "#8B8B8B"}}>{items} items</Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={2}>
                <Typography variant="h4" fontWeight={500} sx={{color: "#8B8B8B"}}>Total</Typography>
                <Typography variant="h2" fontWeight={700}>${total}</Typography>
            </Stack>
            <OrderForm type="cart" handleClickOpen={handleClickOpen} />
        </Box>
    );
};