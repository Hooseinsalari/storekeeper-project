import React, { useState } from 'react';

import axios from "axios";

import styles from "./AddProductComponent.module.css"

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

  const [newOption, setNewOption] = useState({value:"شیر", label:""})

  const categoryHandler = (event) => {
    setNewOption({value: event.target.value, label: event.target.value})
    // setOptions(newOption)
  }

  const addNewCategory = () => {
    setOptions({newOption})
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
          <label className={styles.label}>دسته بندی جدید</label>
          <input className={styles.input} type="text" name="category" value={newOption.value} onChange={categoryHandler} />
          <button onClick={addNewCategory}>افزودن</button>
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
          <textarea className={styles.input} name="description" value={product.description} onChange={changeHandler} />
        </div>
        <div>
          <button className={styles.button} type="submit">اضافه کردن محصول</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductComponent;