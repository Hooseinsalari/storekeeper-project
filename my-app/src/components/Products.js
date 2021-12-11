import React, { useRef } from "react";

import styles from "./Products.module.css";

const Products = ({ data }) => {

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

 

  return (
    <div className={styles.container}>
      {data.map((product) => (
        <details ref={details} key={product.id} className={styles.product} onClick={(e) => clickHandler(product.id, e)}>
          <summary className={styles.summary}>
            <p className={styles.proName}>{product.name}</p>
            <p className={styles.proCategory}>{product.category}</p>
            <p className={styles.proQuantity}>{product.quantity}</p>
          </summary>
          <p>
              this is a
          </p>
        </details>
      ))}
    </div>
  );
};

export default Products;
