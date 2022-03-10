import { useState, useEffect } from "react";
//Import API
import { API_URL, API_KEY } from "../api";
//Import Components
import Loader from "./Loader";
import GoodList from "./GoodList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      {loading ? <Loader /> : <GoodList goods={goods} />}
    </div>
  );
}

export default Shop;
