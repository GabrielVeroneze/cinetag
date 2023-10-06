import { Link } from 'react-router-dom';
import styles from './MenuLink.module.scss'

const MenuLink = ({ children, url }) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default MenuLink