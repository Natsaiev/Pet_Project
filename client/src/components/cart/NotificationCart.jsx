import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const NotificationCart = ({ open, setOpen }) => {
    return (
        <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <DialogTitle 
                    sx={{ 
                        fontSize: { md: 40, xs: 32 }, 
                        fontWeight: 800, 
                        lineHeight: "3rem",
                        color: '#0D50FF',
                    }}
                >
                    Congratulations!
                </DialogTitle>
                <IconButton 
                    aria-label="close" 
                    onClick={() => setOpen(false)} 
                    sx={{
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                >
                    <CloseIcon sx={{ color: '#0D50FF' }} fontSize="large" />
                </IconButton>
            </Stack>
            <DialogContent>
                <Typography mb={2} sx={{ color: '#282828' }}> 
                    Your order has been successfully placed on the website.
                </Typography>
                <Typography sx={{ color: '#282828' }}>
                    A manager will contact you shortly to confirm your order.
                </Typography>
            </DialogContent>
        </Dialog>
    );
};