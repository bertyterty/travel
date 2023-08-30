import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1><FontAwesomeIcon icon={faEarthAmericas} /> my travel journal.</h1>
        </header>
    )
}