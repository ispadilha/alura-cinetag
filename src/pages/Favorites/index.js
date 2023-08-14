import Banner from "components/Banner"
import styles from "./Favorites.module.css"
import Title from "components/Title"
import Card from "components/Card"

function Favorites(){
    return(
        <>
        <Banner image="favorites" />
        <Title>
            <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
            <Card id="1" title="" cover="" />
        </section>
        </>
    )
}

export default Favorites