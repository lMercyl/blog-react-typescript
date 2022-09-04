import './Category.scss';
import ItemCategory from './ItemCategory';

const Category = () => {
  return (
    <div className="category">
      <p>CATEGORIES</p>
      <ul>
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
      </ul>
    </div>
  );
};

export default Category;
