import { Box} from "@mui/material";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import ScrollToTop from "../utils";
import {useBreadcrumbs} from "../CustomHook";
import {useContext} from "react";
import {BreadcrumbsContext} from "../context/breadcrumbsContext";
import {Breadcrumbs} from "../components/Breadcrumbs";


export const Layout = ({ children}) => {
  const {crumbs} = useContext(BreadcrumbsContext);
  useBreadcrumbs();
   
  ScrollToTop();

  return (
    <div>
      <Header />
      <Breadcrumbs crumbs={crumbs} />
      <Box style={{ maxWidth: 1920 }}>{children}</Box>
      <Footer />
    </div>
  );
};
