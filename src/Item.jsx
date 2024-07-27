function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <div className="every-item">
      <li>
        <input
          type="checkbox"
          value={item.done}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.done ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>✖</button>
      </li>
    </div>
  );
}

export default Item;
