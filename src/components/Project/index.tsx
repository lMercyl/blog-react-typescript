import Button from '../Button';
import styles from './Project.module.scss';

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.contain}>
        <div className={styles.head}>
          <time>2020</time>
          <div className={styles.stars}>
            <span>1671</span>
            <img width={15} height={15} src="images/star.svg" alt="star" />
          </div>
        </div>
        <p className={styles.title}>taniarascia.com</p>
        <p>The source of this website.</p>
      </div>
      <div className={styles.buttons}>
        <Button>Article</Button>
        <Button>Demo</Button>
        <Button>Source</Button>
      </div>
    </div>
  );
};

export default Project;
