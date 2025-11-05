import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <span className={styles.desc}>Guess Who's that Pokemon?</span>
            <Link className={styles.btn} to="/quiz">PokeQuiz</Link>
        </div>

        <div className={styles.card}>
            <span className={styles.desc}>Search/Explore Pokemons</span>
            <Link className={styles.btn} to="/pokedex">PokeDex</Link>
        </div>
    </div>
  )
}

export default Home