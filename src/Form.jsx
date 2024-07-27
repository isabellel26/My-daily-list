import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Write your tasks for today🖍 </h3>
      <input
        type="text"
        placeholder="Task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
