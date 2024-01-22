import { useEffect, useState } from "react";
import FoodItems from "./FoodItems";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProfileMenu = () => {
  const data = [
    {
      name: "Pandit Ji",
      CategoryName: "Pandilt_ji_Cetegory",
      DataName: "Pandit_Ji_food_items",
      username: "panditJi@foodiee",
    },
    {
      name: "The Mughals",
      CategoryName: "food_category",
      DataName: "food_items",
      username: "theMughals@foodiee",
    },
    {
      name: "Cake House",
      CategoryName: "cake_House_category",
      DataName: "cake_items",
      username: "cakeHouse@foodiee",
    },
    {
      name: "Agra Cafe",
      CategoryName: "coffee_bees",
      DataName: "coffee_bees_items",
      username: "coffeeBees@foodiee",
    },
    {
      name: "Ashiayana",
      CategoryName: "ashiyana_category",
      DataName: "ashiyana_items",
      username: "ashiyana@foodiee",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState("");
  const [foodCategory, setfoodCategory] = useState("");
  const [foodData, setFoodData] = useState("");

  const location = useLocation();
  const queries = new URLSearchParams(location.search);

  const username = queries.get("username");

  const restarunt = data.find((elem) => elem.username === username);

  const handleSubmit = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/fooditems",
      {
        categoryName: restarunt.CategoryName,
        dataName: restarunt.DataName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setFoodData(data.foodItems);
    setfoodCategory(data.foodCategory);
    setCurrentCategory(data.foodCategory[0].CategoryName);
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      <div className="profile-user-details">
        {foodData && (
          <FoodItems
            food_items_data={foodData}
            currentCategory={currentCategory}
          />
        )}

        {console.log(foodData)}
      </div>
    </>
  );
};

export default ProfileMenu;
