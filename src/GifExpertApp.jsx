import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (valor) => {
    valor.trim() && !categories.includes(valor)
      ? setCategories([valor, ...categories])
      : null;
  };

  return (
    <>
      
      <h1>GifExpertApp</h1>

   
      <AddCategory onAddCategory={onAddCategory} />

        {
           categories.map((category) =>
                (<GifGrid 
                     key = { category } 
                     category = {category}/>))
        }
     
   
    </>
  );
};
