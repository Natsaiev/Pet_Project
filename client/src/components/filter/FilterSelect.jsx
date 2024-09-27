import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, List, ListItem, Typography } from "@mui/material";

export const FilterSelect = ({ options, defaultValue, handleSelect }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        handleSelect(value);
    };

    return (
        <Box sx={{ position: 'relative', width: '200px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid #DDDDDD',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    minHeight: '40px'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Typography>{selectedValue || "Select option"}</Typography>
                {isOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
                ) : (
                    <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                )}
            </Box>

            {isOpen && (
                <List
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        border: '1px solid #DDDDDD',
                        borderRadius: '6px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 1,
                        maxHeight: '200px',
                        overflowY: 'auto',
                    }}
                >
                    {options.map((option) => (
                        <ListItem
                            key={option}
                            sx={{
                                padding: '8px 12px',
                                cursor: 'pointer',
                                backgroundColor: option === selectedValue ? '#F0F0F0' : '#FFFFFF',
                                '&:hover': {
                                    backgroundColor: '#F0F0F0',
                                },
                            }}
                            onClick={() => onClick(option)}
                        >
                            {option}
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};