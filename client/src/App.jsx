import { MainRouter } from "./routes/MainRouter";
import { useState } from "react";
import {BreadcrumbsContext} from "./context/breadcrumbsContext";


function App() {
  const [crumbs, setCrumbs] = useState([]);
  
  return (
    <BreadcrumbsContext.Provider value={{ crumbs, setCrumbs }}>
    <MainRouter />
    </BreadcrumbsContext.Provider>
  );
}

export default App;
