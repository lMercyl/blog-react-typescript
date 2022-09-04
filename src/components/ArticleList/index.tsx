import styles from './ArticleList.module.scss';
import ItemList from './ItemList';

const AritcleList = () => {
  return (
    <div className={styles.list}>
      <h1>2020</h1>
      <ul>
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </ul>
    </div>
  );
};

export default AritcleList;
