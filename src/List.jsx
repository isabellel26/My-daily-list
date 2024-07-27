import Item from "./Item";

function List({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="list-items">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
