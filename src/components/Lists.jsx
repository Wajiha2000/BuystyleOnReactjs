// import { Router,Link } from 'react-router-dom';
import React from 'react'

const Lists = () => {
  const GroceryItems=["Rice","Sugar","Tea","Salt","Vegetables","Fruits","Oil","Sauces","Chicken","Tooth paste & Brush","Pulses","Juices","Flour"];
  const items=GroceryItems.map((grocery) =>
    <li className='lists-li'>{grocery}</li>
  );
  return (
    <div>
        <h1 className='list-h1'>Lists of Grocery</h1>
        <ul>
          {items}
        </ul>
    </div>
  )
}

export default Lists
