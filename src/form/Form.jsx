import React from 'react';
import styles from './Form.module.css';

const Form = ({query, setQuery, handleSubmit}) => {
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Introduce el nombre de un pokemon'></input>
            </form>
        </>
    );
};

export default Form;
