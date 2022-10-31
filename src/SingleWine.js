export default function singleWine({ entireObject }) {

    return (
        <div className="menu-items__items">
            <img src={entireObject.image} alt="" />
            <div>
                <h3>{entireObject.winery}</h3>
                <span>{entireObject.wine}</span>
                <p>{entireObject.location}</p>
            </div>
        </div>
    )

}