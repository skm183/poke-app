import { useState } from 'react'
import styles from './Quiz.module.css'
import { useForm } from 'react-hook-form'
import data from '../assets/map.json' with { type: 'json' }
import { difficulties } from '../components/difficulties'
import Selector from '../components/Selector'

const Quiz = () => {

    const MAX_POKEMON_ID = 1025;
    // const id = Math.floor(Math.random() * 1025) + 1;
    // const ans = data[id];
    // const url = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
    const list = difficulties;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [option, setOption] = useState(list[0]);

    const onSubmit = (data) => {
        alert(data.input.toLowerCase() === pokemon.ans ? "Correct!" : `Wrong! It was ${pokemon.ans}.`);
        setPokemon(generatePokemon())
    }

    const getRandom = () => {
        return data[Math.floor(Math.random() * MAX_POKEMON_ID) + 1]
    }

    const generatePokemon = () => {
        const newId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        const newAns = data[newId];
        const newUrl = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${newId.toString().padStart(3, '0')}.png`;
        return { id: newId, ans: newAns, url: newUrl };
    };

    const getChoices = () => {
        const choices = [];
        const random_index = Math.floor(Math.random()*4)
        for (let i = 0; i<4; i++) {
            choices.push(i===random_index ? pokemon.ans : getRandom())
        }
        return choices
    }

    const handleClick = (ch) => {
        if (pokemon.ans === ch) {
            alert("Correct!")
        }
        else {
            alert(`Wrong! The answer was ${pokemon.ans}.`)
        }
        setPokemon(generatePokemon());

    }
    const [pokemon, setPokemon] = useState(generatePokemon);

    const render = () => {
        switch (option.value) {
            case 'trainer': 
                return (
                    <>
                    <img src={pokemon.url} alt="Pokemon Image" />
                    
                    <div className='choice_box'>
                        {getChoices().map((ch) => (<button className='choice' onClick={() => handleClick(ch)}>{ch}</button>))}
                    </div>

                    </>
                )
            case 'gym_leader':
                return (
                    <>                    
                    <img src={pokemon.url} alt="Pokemon Image" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('input')} />
                        <input type="Submit" />
                    </form>
                    </>
                )
            case 'champion':
                return (
                    <>                    
                    <img className={styles.silhouette} src={pokemon.url} alt="Pokemon Image" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('input')} />
                        <input type="Submit" />
                    </form>
                    </>
                )
        }
    }

    return (

        <>
            <div className={styles.title}>Quiz</div>

            <div className={styles.container}>
                <div className='difficulty'>
                    <Selector list={difficulties} option={option} setOption={setOption}/>
                </div>
                <div className='game'>
                    {render()}
                </div>
            </div>
        </>
    )
}

export default Quiz