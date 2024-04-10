const FoodListItem = (props) => {
  const { item } = props;
  const { imgUrl, title, calorie, content } = item;

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
};

const FoodList = (props) => {
  const { items } = props;
  return (
    <ul className="FoodList">
      {items.map((item) => {
        return (
          <li>
            <FoodListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default FoodList;
