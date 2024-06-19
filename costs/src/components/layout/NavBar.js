import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './NavBar.module.css';
import logo from '../../images/costs_logo.png';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default NavBar;