import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

import styles from './Navigation.module.css';

export const MainNavigation = () => {

    return (
        <Navigation>
            <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? styles['nav-active'] : ''}>About</NavLink></li>
            <li><Link to="/characters">Characters</Link></li>
        </Navigation>
    );
};