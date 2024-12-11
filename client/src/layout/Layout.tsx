import Sidenav from '../components/Sidenav';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidenav />
      <main>{children}</main>
    </div>
  );
}
