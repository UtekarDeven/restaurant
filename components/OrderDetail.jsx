import React from "react";
import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.continer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          You will have to pay {total} after delivery.
        </h1>
        <div className={styles.item}>
          <label className={styles.label}>Name :</label>
          <input
            placeholder="deven utekar"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone :</label>
          <input
            type="text"
            placeholder="9747242434"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address :</label>
          <textarea
            rows={5}
            placeholder="Mumbai Lalbaug"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
