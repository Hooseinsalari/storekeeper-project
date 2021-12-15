import React, { useState, useEffect } from "react";

import styles from "./AddProductComponent.module.css";
import "../font/vazir-font-v16.1.0/Vazir-Bold.ttf";

const AddProductComponent = ({ data, setData }) => {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    description: "",
    id: Math.floor(Math.random() * 1000),
  });

  const [options, setOptions] = useState([
  {
    value: "",
    label: "-- انتخاب --",
  },
  {
    value: "لبنیات",
    label: "لبنیات",
  },
  {
    value: "خشکبار",
    label: "خشکبار",
  },
  {
    value: "تنقلات",
    label: "تنقلات",
  }]);

  const [newCategory, setNewCategory] = useState({ value: "", label: "" });

  const inputHandler = (event) => {
    setNewCategory({ value: event.target.value, label: event.target.value });
  };

  const categoryHandler = (event) => {
    event.preventDefault();
    console.log(newCategory);
    setOptions([...options, newCategory])
    localStorage.setItem("options", JSON.stringify(options))
    setNewCategory({value: ""})
  };

  const changeHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(product.name && product.quantity && product.category) {
      setData([...data, product]);
    }
    setProduct({ name: "", category: "", quantity: 0 });
  };
  
  useEffect(() => {
    const saveCate = JSON.parse(localStorage.getItem("options"))
    if (saveCate) setOptions(saveCate)
  }, [])

  return (
    <div>
      <form className={styles.container} onSubmit={categoryHandler}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>افزودن دسته بندی جدید</label>
          <input
            type="text"
            className={styles.input}
            value={newCategory.value}
            onChange={inputHandler}
          />
          <div className={styles.cateBtn}>
            <button type="submit" className={styles.button} >
              افزودن
            </button>
          </div>
        </div>
      </form>
      <form
        onSubmit={submitHandler}
        className={styles.container}
        autoComplete="off"
      >
        <div className={styles.inputContainer}>
          <label className={styles.label}>نام محصول</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={product.name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>دسته بندی</label>
          <select
            onChange={changeHandler}
            name="category"
            className={`${styles.input} ${styles.select}`}
          >
            {options.map((option) => (
              <option className={styles.option} value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>تعداد</label>
          <input
            className={styles.input}
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>توضیحات</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="description"
            value={product.description}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className={styles.button} type="submit">
            اضافه کردن محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductComponent;
