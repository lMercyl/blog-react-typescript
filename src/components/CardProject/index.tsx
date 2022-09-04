import { Link } from 'react-router-dom';
import styles from './CardProject.module.scss';

interface CardProjectProps {
  title: string;
  date: string;
  description: string;
  article: string;
  demo: string;
  url: string;
}

const CardProject = ({ title, date, description, article, demo, url }: CardProjectProps) => {
  return (
    <div className={styles.card}>
      <div className="d-flex align-flex-start flex-column">
        <time>{date}</time>
        <Link to={url}>{title}</Link>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link to={article}>Статья</Link>
        <Link to={demo}>Демо</Link>
      </div>
    </div>
  );
};

export default CardProject;
