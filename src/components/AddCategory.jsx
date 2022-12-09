import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
 

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

 

  const onsubmit = (e) => {
    e.preventDefault();
    onAddCategory( inputValue );
    setInputValue("");
  };

  return (
    <form onSubmit={onsubmit}>
     

      <input
        className="input"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
