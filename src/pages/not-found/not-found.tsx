import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFound = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <h1 className={styles.title}>404</h1>

      <p className={styles.text}>Страница не найдена</p>

      <Link to={AppRoute.Main}>
        <span className={styles.link}>Вернуться на главную</span>
      </Link>
    </div>
  </div>
);

export default NotFound;
