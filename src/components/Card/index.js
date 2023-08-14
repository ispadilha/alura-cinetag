import styles from "./Card.module.css"
import iconFavOutline from "./favorite_outline.png"

function Card({id, title, cover}){
    return(
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover}/>
            <h2>{title}</h2>
            <img src={iconFavOutline} alt="Favoritar filme" className={styles.favOutline}/>
        </div>
    )
}

export default Card