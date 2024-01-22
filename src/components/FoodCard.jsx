import React, { useEffect, useRef, useState } from "react";
import "../components/styles/Food_card.css";

const FoodCard = ({ options, id, foodItem }) => {
  // const id = props.id;
  const priceOptions = Object.keys(options);
  let priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  // const handleAddToCart = async () => {
  //   setOrder((prevOrder) => [...prevOrder, id]);

  //   setAddNotification(true);
  //   // console.log(AddNotification)
  //   setTimeout(() => {
  //     setAddNotification(false);
  //     // console.log(AddNotification)
  //   }, 2000);

  //   let data=[];
  //    data=foodItems.filter((element,index)=>element._id===order);
  //   foodItems.forEach((element,index) => {
  //         element._id===order[index]
  //   });
  //   console.log(data,order,foodItems);

  //   let food = [];
  //   for (const item of data) {
  //     if (item.id === foodItem._id) {
  //       food = item;
  //       break;
  //     }
  //   }
  //   if (food !== []) {
  //     if (food.size === size) {
  //       await dispatch({
  //         type: "UPDATE",
  //         id: foodItem._id,
  //         price: finalPrice,
  //         qty: qty,
  //       });
  //       return;
  //     } else if (food.size !== size) {
  //       await dispatch({
  //         type: "ADD",
  //         id: foodItem._id,
  //         img: foodItem.img,
  //         name: foodItem.name,
  //         price: finalPrice,
  //         qty: qty,
  //         size: size,
  //       });
  //       return;
  //     }
  //     return;
  //   }

  //   await dispatch({
  //     type: "ADD",
  //     id: foodItem._id,
  //     img: foodItem.img,
  //     name: foodItem.name,
  //     price: finalPrice,
  //     qty: qty,
  //     size: size,
  //   });
  // };

  //   const handleAddToCart = async () => {
  //     setOrder((prevOrder) => [...prevOrder, id]);

  //     setAddNotification(true);
  //     setTimeout(() => {
  //       setAddNotification(false);
  //     }, 1000);

  //     const data = foodItems.filter((element) => element._id === id);
  //     console.log(data, order, foodItems);

  //     let food = data.find((item) => item.id === foodItem._id);

  //     if (food) {
  //       if (food.size === size) {
  //         await dispatch({
  //           type: "UPDATE",
  //           id: foodItem._id,
  //           price: finalPrice,
  //           qty: qty,
  //         });
  //       } else {
  //         await dispatch({
  //           type: "ADD",
  //           id: foodItem._id,
  //           img: foodItem.img,
  //           name: foodItem.name,
  //           price: finalPrice,
  //           qty: qty,
  //           size: size,
  //         });
  //       }
  //     } else {
  //       await dispatch({
  //         type: "ADD",
  //         id: foodItem._id,
  //         img: foodItem.img,
  //         name: foodItem.name,
  //         price: finalPrice,
  //         qty: qty,
  //         size: size,
  //       });
  //     }
  //   };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value); // Setting the finalprice in each render
    // console.log(order);
  }, []);

  return (
    <>
      <div className="food-card">
        <img src={foodItem.img} alt="Pizza Image" />
        <div className="food-card-content">
          <h2>{foodItem.name}</h2>
          <div className="options">
            <select
              className="quantity"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => [
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>,
              ])}
            </select>
            <select
              className="size"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
          <span>Rs {finalPrice}/-</span>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
