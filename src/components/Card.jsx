
const Card = ({cat}) => {

    return (
            <article id={cat.id} className={"cards__card"}>
                <img alt={"cat-photo"} src={cat.url} className={"cards__card__photo"}></img>
                <p className={"cards__card__info"}><strong>Raza</strong>: {cat.breeds[0].name}</p>
                <p className={"cards__card__info"}><strong>Temperamento</strong>: {cat.breeds[0].temperament}</p>
                <p className={"cards__card__info"}><strong>País de origen</strong>: {cat.breeds[0].country_code}</p>
                <p className={"cards__card__info"}><strong>Nivel de energía</strong>: {cat.breeds[0].energy_level}/5</p>
                <p className={"cards__card__info"}><strong>Relación con perros</strong>: {cat.breeds[0].dog_friendly}/5</p>
            </article>

    )
}
export default Card
