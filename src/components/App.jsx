import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { productUpdate } from "../store/reducers/reducers";
import AppRoutes from "./AppRoutes/AppRoutes";
import "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productUpdate(JSON.parse(localStorage.getItem("product"))));
  });

  return <AppRoutes />;
}

export default App;
