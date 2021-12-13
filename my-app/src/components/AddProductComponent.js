import React, { useState } from 'react';

import axios from "axios";

import styles from "./AddProductComponent.module.css"
import "../font/Mj_Ojan-Fontjo.com/Mj_Ojan.ttf"

const AddProductComponent = ({data, setData}) => {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    description: "",
    id: Math.floor(Math.random() *1000),
    click: false    
  })

  const [options, setOptions] = useState([
    { value: "", label: "-- انتخاب --"},
    { value: "لبنیات", label: "لبنیات" },
    { value: "خشکبار", label: "خشکبار" },
    { value: "تنقلات", label: "تنقلات" },
  ]);

  const [newCategory, setNewCategory] = useState({value: "", label:""})

  const inputHandler = (event) => {
    setNewCategory({value:event.target.value, label: event.target.value})
  }

  const categoryHandler = (event) => {
    console.log(newCategory)
    setOptions([...options, newCategory])
  }


  const changeHandler = (event) => {
    setProduct({...product, [event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setData([...data, product])
    axios.post("http://localhost:3001/product", product)
    setProduct({ name:"", category: "", quantity: 0})
  }

  

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>افزودن دسته بندی</label>
          <input className={styles.input} value={newCategory.value} onChange={inputHandler} />
          <button className={styles.button} onClick={categoryHandler}>افزودن</button>
        </div>
      </div>
      <form onSubmit={submitHandler} className={styles.container} autoComplete='off'>
        <div className={styles.inputContainer}>
          <label className={styles.label}>نام محصول</label>
          <input className={styles.input} type="text" name="name" value={product.name} onChange={changeHandler} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>دسته بندی</label>
          <select onChange={changeHandler} name="category" className={`${styles.input} ${styles.select}`}>
            {
              options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)
            }
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>تعداد</label>
          <input className={styles.input} type="number" name="quantity" value={product.quantity} onChange={changeHandler} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>توضیحات</label>
          <textarea className={`${styles.input} ${styles.textarea}`} name="description" value={product.description} onChange={changeHandler} />
        </div>
        <div>
          <button className={styles.button} type="submit">اضافه کردن محصول</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductComponent;