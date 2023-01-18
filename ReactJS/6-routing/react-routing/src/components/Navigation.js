import { Link, NavLink } from "react-router-dom";

import styles from './Navigation.module.css';


export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    };

    return (
        <nav>
            <ul>
                <li><Link to="/" ><em>Home</em></Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/pricing" >Pricing</Link></li>
                <li><Link to="/pricing/premium" >Premium Pricing</Link></li>
                <li><Link to="/starships/2" >Products</Link></li>
                <li><Link to="/millennium-falcon" >Millennium Falcon</Link></li>
                <li><Link to="/contacts" >Contacts</Link></li>
                
            </ul>

            <ul>
                <li><NavLink className={setNavStyle} to="/" ><em>Home</em></NavLink></li>
                <li><NavLink className={setNavStyle} to="/about" >About</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing" >Pricing</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing/premium" >Premium Pricing</NavLink></li>

                <li>
                    <NavLink 
                        to="/starships"
                        // style={(navLinkProps) => {
                        //     return navLinkProps.isActive
                        //         ? {backgroundColor: 'lightblue'}
                        //         : undefined
                        // }} 
                        className={setNavStyle}
                    >
                        Starships
                    </NavLink>
                </li>

                <li><NavLink className={setNavStyle} to="/millennium-falcon" >Millennium Falcon</NavLink></li>
                <li><NavLink className={setNavStyle} to="/contacts" >Contacts</NavLink></li>
                
            </ul>
        </nav>
        
    );
};