import React from "react";

import styles from "./Products.module.css";

// svg
import axios from "axios";

const Products = ({ data, setData }) => {
  

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3001/product/${id}`);
    const { data } = await axios.get("http://localhost:3001/product");
    setData(data);
  };

  return data.length ? (
    <div className={styles.container}>
      {data.map((product) => (
        <details
          key={product.id}
          className={styles.product}
        >
          <summary className={styles.summary}>
            <p className={styles.proName}>{product.name}</p>
            <p className={styles.proCategory}>{product.category}</p>
            <p className={styles.proQuantity}>{product.quantity}</p>
            <button
              className={styles.removeBtn}
              onClick={() => deleteHandler(product.id)}
            >
              حدف
            </button>
          </summary>
          {product.description ? (
            <div>
              <p className={styles.description}>{product.description}</p>
            </div>
          ) : (
            <div>
              <p>توضیحات وجود ندارد</p>
            </div>
          )}
        </details>
      ))}
    </div>
  ) : (
    <h1>محصولی وجود ندارد</h1>
  );
};

export default Products;
