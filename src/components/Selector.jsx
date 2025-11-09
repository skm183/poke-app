import styles from './Selector.module.css'
import React from 'react'
import { useState } from 'react'

const Selector = (props) => {
    const list = props.list
    
    return (
        <div className={styles.container}>
            <h3>Difficulty</h3>
            <div className={styles.button_group}>
                {list.map((i) => (
                    <button
                        key={i.value}
                        className={`${styles.button} ${props.option.value === i.value ? styles.active : ''}`}
                        onClick={() => props.setOption(i)}
                    >
                        {i.label}
                    </button>
                ))}
            </div>
            <div className={styles.description_box}>
                <p>{props.option.description}</p>
            </div>
        </div>
    )
}

export default Selector