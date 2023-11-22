function FoodBox(props) {
  const { name, calories, image, servings } = props.food;
  const totalCalories = servings * calories;

  const handleDelete = (id) => {
    const newFoods = [...props.foodsValue];
    newFoods.splice(id, 1);
    props.setFoodsValue(newFoods);
  };

  return (
    <div>
      <p>{name}</p>

      <img src={image} style={{ width: "200px" }} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {totalCalories} </b> kcal
      </p>

      <button onClick={() => handleDelete(props.index)}>Delete</button>
    </div>
  );
}

export default FoodBox;
