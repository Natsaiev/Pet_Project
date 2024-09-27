import { Stack, Typography, Button } from "@mui/material";
import { FilterSelect } from "./FilterSelect";
import { useDispatch, useSelector } from "react-redux";
import { changePriceFrom, changePriceTo, changeSale, changeSorted } from "../../store/filterSlice";
import { styled } from '@mui/material/styles';
import checkmark from '../../assets/checkmark.png';

const filterOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high"
];

export const FilterInput = styled('input')({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "40px", 
    width: 80, 
    padding: "8px 12px",
    borderRadius: 6,
    fontSize: 14, 
    "&::placeholder": {
        color: "#282828",
    }
});

export const FilterCheckbox = styled('input')({
    appearance: "none",
    width: 20, 
    height: 20,
    border: "1px solid #DDDDDD",
    borderRadius: 4,
    cursor: "pointer",
    position: "relative",
    "&:checked": {
        backgroundColor: "#0D50FF",
        borderColor: "#0D50FF",
    },
    "&:checked:after": {
        content: `url(${checkmark})`,
        position: "absolute",
        top: 4,
        left: 4,
        width: 10,
        height: 10,
    }
});

export const FilterComponent = ({ sales = false }) => {
    const dispatch = useDispatch();
    const filterObject = useSelector(state => state.filter);

    return (
        <Stack direction="row" alignItems="center" gap={2} mb={2} ml={5}>
            <Typography sx={{ minWidth: 50 }}>Price</Typography>
            <FilterInput 
                type="number" 
                placeholder="from" 
                value={filterObject.priceFrom} 
                onChange={(e) => dispatch(changePriceFrom(e.target.value))} 
            />
            <Typography>-</Typography>
            <FilterInput 
                type="number" 
                placeholder="to" 
                value={filterObject.priceTo} 
                onChange={(e) => dispatch(changePriceTo(e.target.value))} 
            />

            
            {!sales && (
                <>
                    <Typography sx={{ minWidth: 150 }}>Discounted items</Typography>
                    <FilterCheckbox 
                        type="checkbox" 
                        checked={filterObject.sale || false} 
                        onChange={(e) => dispatch(changeSale(e.target.checked))} 
                    />
                </>
            )}

            <Typography sx={{ minWidth: 50 }}>Sorted</Typography>
            <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} handleSelect={(selected) => dispatch(changeSorted(selected))} />
        </Stack>
    );
};