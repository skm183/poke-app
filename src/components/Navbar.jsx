import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link className={styles.title} to='/'>
        <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p0hmcw6iOi_CsnAHHItdjuY1mvXV9fWbyQ&s" alt="Pokemon Logo" height={"40px"}/>
        <div className={styles.text}>Pokemon App</div>
      </Link>
      {/* <ul className={styles.list}>
        <button className={styles.nav-btn}>PokeDex</button>
        <button className={styles.nav-btn}>PokeQuiz</button>
      </ul> */}
    </nav>
  )
}

export default Navbar