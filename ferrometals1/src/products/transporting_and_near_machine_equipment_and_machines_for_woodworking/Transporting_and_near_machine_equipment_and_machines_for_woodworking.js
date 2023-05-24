import "../products.css"

const TransportingAndNearMachineEquipmentAndMachinesForWoodworking = ({data}) => {
    return (
        <section className="Standart-Section Product-Container">
            <h3 className="Product-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}</h3>
            <article className="Product-Inner-Container">
                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures.map((item) => 
                    <div className="Product-Item-Container" key={item.idGlobal}>
                        <h5 className="Product-Item-Heading">{item.header}</h5>
                        <div className="Product-Content-Container">
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${item.picture}`)} alt={item.captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[item.idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </section>
    )
}

export default TransportingAndNearMachineEquipmentAndMachinesForWoodworking;

// <div key={localItem.id}>
//                                 <p>
//                                     <span>{localItem.parameterName}</span>
//                                     <span>{localItem.parameterValue}</span>
//                                 </p>
//                             </div>