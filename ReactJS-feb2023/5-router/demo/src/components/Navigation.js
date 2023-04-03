import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = ({children}) => {
    return (
        <nav className={styles.navigation}>
            <ul>
                {children}
            </ul>
        </nav>
    );
};

export const NavItem = ({
    children,
    to
}) => {
    return <li><Link to={to}>{children}</Link></li>
};