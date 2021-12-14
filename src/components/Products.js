import React from "react";

import styles from "./Products.module.css";

// svg
import { useEffect } from "react/cjs/react.development";

const Products = ({ data, saveData, setData }) => {
  

  const deleteHandler = (id) => {
    // await axios.delete(`http://localhost:3001/product/${id}`);
    // const { data } = await axios.get("http://localhost:3001/product");
    // setData(data);
    var data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    var index;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          index=i;
          break;
        }
    }
    if(index === undefined) return 
    data.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
  };

  useEffect(() => {
     
    }, [saveData, data])

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
