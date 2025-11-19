import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/generate">Генерировать QR-code </Link>
      <Link to="/scan">Сканировать QR-code</Link>
      <Link to="/genstore">История Генерации</Link>
      <Link to="/scanstore">История Сканирования</Link>
    </nav>
  );
};

export default Navigation;
