import styles from './ItemList.module.scss';

const ItemList = () => {
  return (
    <li className={styles.item}>
      <a href="/">
        <p>How To Set Up a GraphQL API Server in Node.js</p>
        <time>Май 13</time>
      </a>
    </li>
  );
};

export default ItemList;
