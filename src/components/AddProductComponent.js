import React, { useState } from "react";

// style
import styles from "./AddProductComponent.module.css";
import "../font/vazir-font-v16.1.0/Vazir-Bold.ttf";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const AddProductComponent = ({ data, setData, options, setOptions }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    description: "",
    id: Math.floor(Math.random() * 1000),
  });

  const [newCategory, setNewCategory] = useState({ value: "", label: "" });

  const inputHandler = (event) => {
    setNewCategory({ value: event.target.value, label: event.target.value });
  };

  const categoryHandler = (event) => {
    event.preventDefault();
    if (newCategory.value && newCategory.label) {
      setOptions([...options, newCategory]);
    }
    setNewCategory({ value: "" });
  };

  const changeHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (product.name && product.quantity && product.category) {
      setData([...data, product]);
      notify("success", "با موفقیت افزوده شد");
    } else {
      notify("error", "اطلاعات اشتباه");
    }

    setProduct({ name: "", category: "", quantity: 0 });
  };

  return (
    <div>
      <form className={styles.container} onSubmit={categoryHandler}>
        <div className={styles.inputContainer}>
          <div className={styles.tooltip}>
            !<span className={styles.tooltiptext}>این بخش اپشنال هست</span>
          </div>
          <label className={styles.cateLabel}>افزودن دسته بندی جدید</label>
          <input
            type="text"
            className={styles.input}
            value={newCategory.value}
            onChange={inputHandler}
          />
          <div className={styles.cateBtn}>
            <button type="submit" className={styles.button}>
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
              <option
                className={styles.option}
                value={option.value}
                key={option.value}
              >
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
      <ToastContainer />
    </div>
  );
};

export default AddProductComponent;
