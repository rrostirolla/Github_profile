import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson);
            })

            .catch(e => {
                setDeuErro(true)
            })
    }, [nomeUsuario]);
    

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {language}
                        </div>
                        <div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;