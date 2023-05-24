import "../products.css"

const WoodenPellets = ({data}) => {
    return (
        <section className="Standart-Section Product-Container">
            <h3 className="Product-Heading">{data.woodenPellets.mainHeader}</h3>
            <article className="Product-Inner-Container">
                    <div className="Product-Item-Container">
                        <div className="Product-Content-Container">
                            <div className="Pellets-Images-Container">
                                    {data.woodenPellets.photos.map((item) => 
                                    <img className="Product-Image Pellet-Image" key={item.id} 
                                    src={require(`../../data/photo/photo_wooden_pellets/${item.photo}`)} 
                                    alt={item.captionText} />
                                )}
                            </div>
                            <div className="Product-Description-Container Pellet-Description">
                            {data.woodenPellets.parameters.map((item) => 
                                <p key={item.id} className="Product-Description">
                                    <span>{item.parameterName}</span>
                                    <span className="Product-Description-Value">{item.parameterValue}</span>
                                </p>
                            )}
                            </div>
                        </div>
                    </div>
            </article>
        </section>
    )
}

export default WoodenPellets;