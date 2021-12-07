import React, { useEffect, useState } from 'react';

import axios from "axios";

import styles from "./AddProductComponent.module.css"

const AddProductComponent = ({data, setData}) => {
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
    // setData([...data, product])
    axios.post("http://localhost:3001/product", product)
    //  .then((response) => console.log(response.data))
    //  .catch((error) => console.log(error))
    setProduct({ name:"", category: "", quantity: 0})
  }

  useEffect(() => {
    const fetchApi = async () => {
      const {data} = await axios.get("http://localhost:3001/product")
      setData(data)
    }
    fetchApi()
  },[product])

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>نام محصول</label>
        <input className={styles.input} type="text" name="name" value={product.name} onChange={changeHandler} />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>دسته بندی</label>
        <select onChange={changeHandler} name="category" className={`${styles.input} ${styles.select}`}>
          <option value="">-- انتخاب --</option>
          <option value="dairy">لبنیات</option>
          <option value="nuts">خشکبار</option>
          <option value="junkFood">تنقلات</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>تعداد</label>
        <input className={styles.input} type="number" name="quantity" value={product.quantity} onChange={changeHandler} />
      </div>
      <div>
        <button className={styles.button} type="submit">اضافه کردن محصول</button>
      </div>
    </form>
  );
};

export default AddProductComponent;