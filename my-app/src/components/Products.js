import axios from 'axios';
import React, { useEffect } from 'react';

import styles from "./Products.module.css";

const Products = ({data}) => {

    return (
        <div className={styles.container}>
            {
                data.map((product) => (
                <div key={product.id} className={styles.product}>
                    <p className={styles.proName}>{product.name}</p>
                    <p className={styles.proCategory}>{product.category}</p>
                    <p className={styles.proQuantity}>{product.quantity}</p>
                </div>
                    ))
            }
        </div>
    );
};

export default Products;