import Link from 'next/link';
import styles from './sideBar.module.css'; 

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;