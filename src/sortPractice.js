import React, { useState } from "react";

const shoppingList = [
    {id:1, amount: 43450, title: "Phone"},
    {id:2, amount: 340, title: "Headphone"},
    {id:3, amount: 83450, title: "TV"},
    {id:4, amount: 453450, title: "Bike"},]

const SortPractice = ({}) => {
    const [value, setval] = useState({val:[...shoppingList], original:[...shoppingList]});
    //const [orivalue, setval] = useState(shoppingList);
    const [btnName, setBtnName] = useState("sort");
  const sort = (e) => {
      const {val, original} = value;
      e.preventDefault();
      console.log(e.target);
    
    val.sort((a,b) => a.amount - b.amount);
    //let obj = Object.assign([], value);
    console.log(val, original);
    const btn = btnName === "sort" ? "reset":"sort";
    setval({val:[...val], original});
    setBtnName(btn);
  }
  console.log("render", value)
  const items = btnName === "sort" ? value.original : value.val 
  return (
    <div>
      <button onClick={sort}>{btnName}</button>
      <ul>
        {items.map(({ title, amount }) => (
          <li>{title + " : " + amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortPractice;
