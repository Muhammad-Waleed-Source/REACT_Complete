import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButton = () => {
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`list-group-item ${styles["kg-item"]} `}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick= {handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
