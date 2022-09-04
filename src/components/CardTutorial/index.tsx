import { Link } from 'react-router-dom';
import styles from './CardTutorial.module.scss';

interface CardTutitorialProps {
  title: string;
  date: string;
  imgUrl: string;
  url: string;
}

const CardTutorial = ({ title, date, imgUrl, url }: CardTutitorialProps) => {
  return (
    <div className={styles.card}>
      <img width={45} height={45} src={imgUrl} alt="Images" />
      <div className="d-flex justify-content-center flex-column">
        <time>{date}</time>
        <Link to={url}>{title}</Link>
      </div>
    </div>
  );
};

export default CardTutorial;
