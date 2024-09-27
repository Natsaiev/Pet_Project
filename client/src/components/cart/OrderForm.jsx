import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendFormData, sendOrderData } from "../../store/actionCreators";
import { Typography, Button, TextField, Alert, Box } from "@mui/material";
import { useState } from "react";

export const OrderForm = ({ type, handleClickOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = (data) => {
        if (type === "main") {
            dispatch(sendFormData(data));
        } else {
            dispatch(sendOrderData(data));
        }
        setSuccess(true);
        setError("");
        if (handleClickOpen) {
            handleClickOpen();
        }
    }

    return (
        <Box sx={{ backgroundColor: "#f0f0f0", borderRadius: 2, padding: 3, mt: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    label="Name" 
                    fullWidth 
                    {...register("name", { required: true, minLength: 2, pattern: /^[A-Za-zА-Яа-яЁё\s]+$/ })} 
                    error={!!errors.name} 
                    helperText={errors.name ? "Name is required and must be at least 2 letters long." : ""}
                    sx={{ mb: 2 }} 
                />
                
                <TextField 
                    label="Phone number" 
                    type="tel" 
                    fullWidth 
                    {...register("phoneNumber", { required: true, pattern: /^\+\d{1,3}\d{7,}$/ })} 
                    error={!!errors.phoneNumber} 
                    helperText={errors.phoneNumber ? "Phone must start with + and contain at least 7 digits." : ""}
                    sx={{ mb: 2 }} 
                />
                
                <TextField 
                    label="Email" 
                    type="email" 
                    fullWidth 
                    {...register("email", { required: true })} 
                    error={!!errors.email} 
                    helperText={errors.email ? "Email is required." : ""}
                    sx={{ mb: 2 }} 
                />
                
                <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, backgroundColor: "#0D50FF" }}>
                    {type === "main" ? "Get a discount" : "Order"}
                </Button>
            </form>
            
            {success && (
                <Alert variant="filled" severity="success" sx={{ mt: 2 }}>
                    Congratulations! You have received a discount!
                </Alert>
            )}
            {error && (
                <Alert variant="filled" severity="error" sx={{ mt: 2 }}>
                    Something went wrong: {error}
                </Alert>
            )}
        </Box>
    );
};