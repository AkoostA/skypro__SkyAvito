import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  productUpdate,
  tokenUpdate,
  userUpdate,
} from "../store/reducers/reducers";
import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(userUpdate(JSON.parse(localStorage.getItem("user"))));
    dispatch(tokenUpdate(JSON.parse(localStorage.getItem("token"))));
    dispatch(productUpdate(JSON.parse(localStorage.getItem("product"))));
    setLoading(true);
  }, []);

  return loading && <AppRoutes />;
}

export default App;
