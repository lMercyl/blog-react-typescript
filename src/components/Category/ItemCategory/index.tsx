import styles from './ItemCategory.module.scss';

const ItemCategory = () => {
  return (
    <li className={styles.item}>
      <a href="/">
        <p>React</p>
        <p>11</p>
      </a>
    </li>
  );
};

export default ItemCategory;
