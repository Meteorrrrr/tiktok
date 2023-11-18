import styles from './Header.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <nav >
                <ul className={clsx(styles.navbar)}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;