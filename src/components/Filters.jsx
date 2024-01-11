
const Filters = ({handleFiltersClick}) => {



    return (
        <section>
            <article>
                <h3>Raza</h3>
                <ul>
                    <li>
                        <button onClick={()=> handleFiltersClick("beng")}>Bengalí</button>
                        <button>Himalayian</button>
                        <button>Siberian</button>
                    </li>
                </ul>
            </article>
        </section>
    )
}
export default Filters

