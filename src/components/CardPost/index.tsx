import { Link } from 'react-router-dom';
import styles from './CardPost.module.scss';

interface CardPostProps {
  title: string;
  date: string;
  category: string;
  url: string;
  urlCategory: string;
}

const CardPost = ({ title, date, category, url, urlCategory }: CardPostProps) => {
  return (
    <div className={styles.card}>
      <div className="d-flex align-flex-start flex-column">
        <time>{date}</time>
        <Link to={url}>{title}</Link>
      </div>
      <Link to={urlCategory}>{category}</Link>
    </div>
  );
};

export default CardPost;
