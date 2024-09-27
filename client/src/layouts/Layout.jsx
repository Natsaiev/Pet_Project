import { Box } from "@mui/material";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import ScrollToTop from "../utils";
export const Layout = ({ children }) => {

  
  ScrollToTop();
  return (
    <div>
      <Header />
      <Box style={{ maxWidth: 1920 }}>{children}</Box>
      <Footer />
    </div>
  );
};
