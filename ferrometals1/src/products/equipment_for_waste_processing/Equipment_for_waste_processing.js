import "../products.css"

const EquipmentForWasteProcessing = ({data}) => {
    return (
        <section className="Standart-Section Product-Container">
            <h3 className="Product-Heading">{data.equipmentForWasteProcessing.mainHeader}</h3>
            <article className="Product-Inner-Container">
                    <div className="Product-Item-Container">
                        <h5 className="Product-Item-Heading">{data.equipmentForWasteProcessing.pictures[0].header}</h5>
                        <div className="Product-Content-Container">
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)} alt={data.equipmentForWasteProcessing.pictures[0].captionText} />
                            <div className="Product-Description-Container">
                                {data.equipmentForWasteProcessing.pictures[data.equipmentForWasteProcessing.pictures[0].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                        <h5 className="Product-Item-Heading">{data.equipmentForWasteProcessing.pictures[1].header}</h5>
                        <div className="Product-Content-Container">
                            <div className="Pellets-Images-Container">
                                <img className="Product-Image Pellet-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[1].picture}`)} alt={data.equipmentForWasteProcessing.pictures[1].captionText} />
                                <img className="Product-Image Pellet-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[2].picture}`)} alt={data.equipmentForWasteProcessing.pictures[2].captionText} />
                            </div>
                            <div className="Product-Description-Container">
                                {data.equipmentForWasteProcessing.pictures[data.equipmentForWasteProcessing.pictures[1].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
            </article>
        </section>
    )
}

export default EquipmentForWasteProcessing;