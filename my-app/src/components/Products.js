import React, { useRef, useState } from "react";

import styles from "./Products.module.css";

// svg
import arrowUp from "../svg/sort-up-solid.svg";
import arrowDown from "../svg/sort-down-solid.svg";
import axios from "axios";

const Products = ({ data, setData }) => {


    const details = useRef()

  const clickHandler = (id, e) => {
    // const index = data.findIndex((product) => product.id === id)
    // const selectedProduct = {...data[index]}
    // selectedProduct.click = !selectedProduct.click
    // const updateData = [...data]
    // updateData[index] = selectedProduct
    // console.log(updateData)
    // if (!details.some(f => f.contains(e.target))) {
    //     details.forEach(f => f.removeAttribute('open'));
    //   } else {
    //     details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
    //   }
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3001/product/${id}`)
    const {data} = await axios.get("http://localhost:3001/product")
    setData(data)
  }
 

  return (
    <div className={styles.container}>
      {data.map((product) => (
        <details ref={details} key={product.id} className={styles.product} onClick={(e) => clickHandler(product.id, e)}>
          <summary className={styles.summary}>
            <p className={styles.proName}>{product.name}</p>
            <p className={styles.proCategory}>{product.category}</p>
            <p className={styles.proQuantity}>{product.quantity}</p>
            <button className={styles.removeBtn} onClick={() => deleteHandler(product.id)}>حدف</button>
          </summary>
          {
            product.description ? 
            <p className={styles.description}>{product.description}</p> :
            <p>توضیحات وجود ندارد</p>
          }
        </details>
      ))}
    </div>
  );
};

export default Products;
