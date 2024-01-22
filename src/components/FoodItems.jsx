import "../components/styles/Food_items.css";
import FoodCard from "./FoodCard";

const FoodItems = (props) => {
  const foodData = props.food_items_data;
  const currentCategory = props.currentCategory;
console.log(foodData)
  return (
    <>
      <div className="container">
        <div className="food-items-section">
          {foodData.map((data) => {
            return (
              <FoodCard
                key={data._id}
                id={data._id}
                foodItem={data}
                options={data.options[0]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodItems;
