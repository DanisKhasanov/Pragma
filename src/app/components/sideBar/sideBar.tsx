import Link from 'next/link'
import styles from './sideBar.module.css'
import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link href="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
