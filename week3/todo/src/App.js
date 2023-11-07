import "./App.css";
import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    //bosken calısmasın diye
    if (!newItem) {
      alert("enter an item");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem, //new item inputtan aldıgımız deger
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    //yeni array olusturup filtrelicez, filtrediğimiz dizide sildiğimiz harıc tum elemanlar olacak

    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  }
  return (
    <div className="App">
      <h1>todo list</h1>
      <input
        type="text"
        placeholder="add an item.."
        value={newItem}
        //onchangenin nedeni girdiğimz yeni yaazı setNewItem fonk ile newiteme gitsin diye
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button onClick={addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          //items dizisindeki her bir elemanımızı temsil ediyor
          return (
            //14.satırdan aldıgımız idnin itemi ve valuesi
            <li>
              key={item.id}
              {">"}
              {item.value}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
