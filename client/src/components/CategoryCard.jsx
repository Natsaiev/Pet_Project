import { Box, Typography, Stack } from "@mui/material";
import { API_URL } from "../store/actionCreators";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`} style={{ textDecoration: "none" }}>
      <Stack direction="column" alignItems="center" gap={2}>
        <Box
          sx={{
            width: 400,
            height: 430,
            borderRadius: 3,
            overflow: "hidden",
            transition: "transform 0.4s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            alt={`${category.title}`}
            src={`${API_URL}${category.image}`}
          />
        </Box>
        <Typography
          style={{
            color: "#282828",
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          {category.title}
        </Typography>
      </Stack>
    </Link>
  );
};
