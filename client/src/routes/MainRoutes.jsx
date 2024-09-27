// import {Route, Routes} from "react-router-dom";
// import {Home } from "../pages/Home"
// import { Categories } from "../pages/Categories";
// import { Category } from "../pages/Category";
// import { Product } from "../pages/Product";
// import { Products } from "../pages/Products";
// import { Discount } from "../pages/Discount";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getCategories, getProducts } from "../store/actionCreators";

// export const MainRouter = () => {

// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(getCategories())
//     dispatch(getProducts())
// }, []);

//     return <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/categories/:categoryId" element={<Category />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<Product />} />
//         <Route path="/discounts" element={<Discount />} />
        
//     </Routes>
// }