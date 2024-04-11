import "./FoodList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

const FoodListItem = (props) => {
  const { item, onDelete } = props;
  const { imgUrl, title, calorie, content, createdAt } = item;

  const handleDeleteItem = () => onDelete(item.id);

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleDeleteItem}>삭제</button>
    </div>
  );
};

const FoodList = (props) => {
  const { items, onDelete } = props;

  const renderedItems = items.map((item) => {
    return (
      <li key={item.id}>
        <FoodListItem item={item} onDelete={onDelete} />
      </li>
    );
  });

  return <ul className="FoodList">{renderedItems}</ul>;
};

export default FoodList;
