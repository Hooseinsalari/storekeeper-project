import React from 'react';
import {Link} from "react-router-dom";

// style
import styles from "./Navbar.module.css"

// svg
import account from "../svg/user-circle-solid.svg"

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div>
                <img src={account} alt="account" className={styles.img} />
            </div>
            <div>
                <Link to="/">محصولات</Link>
            </div>
            <div>
                <Link to="/addProduct">افزودن محصول</Link>
            </div>
        </nav>
    );
};

export default Navbar;