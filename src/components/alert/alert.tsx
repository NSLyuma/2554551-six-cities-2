import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectAlertMessage } from '../../store/alert/alert.selectors';
import { clearAlert } from '../../store/alert/alert-slice';
import styles from './alert.module.css';

const Alert = () => {
  const message = useSelector(selectAlertMessage);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearAlert());
  };

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <button className={styles.close} onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Alert;
