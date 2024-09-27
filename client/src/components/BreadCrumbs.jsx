import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const Breadcrumbs = ({ crumbs }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 5 }}>
            {crumbs.map((crumb, index, array) => (
                <Box key={crumb.path} sx={{ display: 'flex', alignItems: 'center' }}>
                    {index > 0 && (
                        <Box
                            sx={{
                                height: '2px', // Высота полоски
                                backgroundColor: '#DDDDDD',
                                width: '16px', // Ширина полоски
                                margin: '0 8px', // Отступы по горизонтали
                            }}
                        />
                    )}
                    {index === array.length - 1 ? (
                        <Typography
                            color="text.primary"
                            sx={{
                                padding: '8px',
                                border: '1px solid #DDDDDD',
                                borderRadius: '4px',
                            }}
                        >
                            {crumb.label}
                        </Typography>
                    ) : (
                        <Link
                            to={crumb.path}
                            style={{
                                textDecoration: 'none',
                                color: '#0D50FF',
                                padding: '8px',
                                border: '1px solid #DDDDDD',
                                borderRadius: '4px',
                            }}
                        >
                            {crumb.label}
                        </Link>
                    )}
                </Box>
            ))}
        </Box>
    );
};