import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {

  return (
    <li className={`list-group-item ${styles.kgItem} ${bought && "active"}`}>
      <span className={styles.kgSpan}> {foodItem} </span>
      <button
        className={`btn btn-info ${styles.button}`}
        onClick= {handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
