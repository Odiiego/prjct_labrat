import styles from './Sidenav.module.scss';

export default function Sidenav() {
  return (
    <aside className={styles.sidenav}>
      <h1 className={styles.title}>
        <br />
        <span className={styles.titleAccent}>
          <span className={styles.titleUppercase}>L</span>ab
          <span className={styles.titleUppercase}>R</span>at
        </span>
        <br />
        Prjct
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Home</li>
          <li className={styles.navListItem}>About</li>
        </ul>
      </nav>

      <footer>labrat</footer>
    </aside>
  );
}
