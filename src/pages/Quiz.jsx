import React from 'react'
import styles from './Quiz.module.css'
import { useForm } from 'react-hook-form'
import data from '../assets/map.json' with { type: 'json' }

const Quiz = () => {

    const MAX_POKEMON_ID = 1025;
    const id = Math.floor(Math.random()*1025)+1;
    // const data = require('../assets/map.json');
    const ans = data[id];
    const url = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => alert(data.input.toLowerCase()===ans ? "Correct!" : `Wrong! Ans was ${ans}.`);

    return (

        <>
        <div className={styles.title}>Quiz</div>
        <div className={styles.container}>
            <img src={url? url : null} alt="Pokemon Image" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('input')} />
                <input type="submit" />
            </form>
        </div>
        </>
    )
}

export default Quiz