import React, { useState } from 'react';

import axios from "axios";

import styles from "./AddProductComponent.module.css"

const AddProductComponent = () => {
  const [data, setData] = useState([])
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: 0    
  })

  const changeHandler = (event) => {
    setProduct({...product, [event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setData([...data, product])
    axios.post("http://localhost:3001/product", product)
  }

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>نام محصول</label>
        <input className={styles.input} type="text" name="name" onChange={changeHandler} />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>دسته بندی</label>
        <select onChange={changeHandler} name="category" className={`${styles.input} ${styles.select}`}>
          <option value="">-- select --</option>
          <option value="dairy">dairy</option>
          <option value="nuts">Nuts</option>
          <option value="junkFood">Junk Food</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>تعداد</label>
        <input className={styles.input} type="number" name="quantity" onChange={changeHandler} />
      </div>
      <div>
        <button className={styles.button} type="submit">اضافه کردن محصول</button>
      </div>
    </form>
  );
};

export default AddProductComponent;