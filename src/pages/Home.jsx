import React, { useEffect, useState } from "react";
import "../styles/UserProfilePage.css";
import { useLocation, useNavigate } from "react-router-dom";
import FoodItems from "../components/FoodItems";
import axios from "axios";
import ProfileMenu from "../components/ProfileMenu";
import { useRecoilValue } from "recoil";
import shopState from "../recoil/atoms/shop";

const Home = () => {
  //   const navigate = useNavigate();
  const [orders, setorders] = useState(null);
  const [orderFlag, setOrderFlag] = useState(true);
  const shop = useRecoilValue(shopState);
  // const restrauntName = localStorage.getItem("restrauntName");
  // const restrauntName = localStorage.getItem("restrauntName");

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // navigate("/login");
  };

  const location = useLocation();
  const queires = new URLSearchParams(location.search);

  const restrauntName = queires.get("restrauntName");
  const getOrders = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/restrauntOrders",
      {
        name: restrauntName,
      }
    );

    setorders(data.orders);
    // let tempOrderData = data.orders.orderData.shift(); // helps to remove first element (index data) because not needed
    // console.log(data.orders.orderData);
    // setOrderData(tempOrderData);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1 style={{fontSize:'3rem',fontWeight:"600"}}>{shop.restrauntName}</h1>
      {orders &&
        orders
          .slice()
          .reverse()
          .map((elem, index) => {
            return (
              <div key={index}>
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    color: "red",
                    marginInline: "1rem",
                  }}
                >
                  {elem.name}
                </span>
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "black",
                    marginInline: "1rem",
                  }}
                >
                  {elem.orderDate}
                </span>
                <hr />
                <div className="order-items">
                  <ul>
                    <li className="items-details">
                      <span style={{ fontSize: "1.5rem", fontWeight: "550" }}>
                        Display
                      </span>
                      <span style={{ fontSize: "1.5rem", fontWeight: "550" }}>
                        Name
                      </span>
                      <span style={{ fontSize: "1.5rem", fontWeight: "550" }}>
                        Size
                      </span>
                      <span style={{ fontSize: "1.5rem", fontWeight: "550" }}>
                        Quantity
                      </span>
                    </li>
                    {elem.orderData.slice(1).map((elem, index) => {
                      return (
                        <li key={index} className="items-details">
                          <img src={elem.img} alt="" width={160} height={100} />
                          <span>{elem.name}</span>
                          <span>{elem.size}</span>
                          <span>{elem.qty}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Home;
