import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./products.css"

const Products = ({data, changeHeaderBackground}) => {
 return (
   <section className="Standart-Section Main-Products-Container">
    <h2 className="Main-Products-Title">{data.products.title}</h2>
    <div className="Main-Products-Inner-Container">
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} 
      onClick={changeHeaderBackground}>
        <img className="Main-Products-Inner-Image" alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}
        src={require(`../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}<ArrowForwardIosIcon /></button>
      </Link>
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.equipmentForWasteProcessing} 
      onClick={changeHeaderBackground}>
        <img className="Main-Products-Inner-Image" alt={data.equipmentForWasteProcessing.mainHeader}
        src={require(`../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.equipmentForWasteProcessing.mainHeader}<ArrowForwardIosIcon /></button>
      </Link>
    </div>
    <div className="Main-Products-Inner-Container">
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.roundWoodAccountingScanner} 
      onClick={changeHeaderBackground}>
        <img className="Main-Products-Inner-Image" alt={data.roundWoodAccountingScanner.mainHeader}
        src={require(`../data/picture/picture_products/${data.roundWoodAccountingScanner.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.roundWoodAccountingScanner.mainHeader}<ArrowForwardIosIcon /></button>
      </Link>
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.woodenPellets} 
      onClick={changeHeaderBackground}>
        <img className="Main-Products-Inner-Image" alt={data.woodenPellets.mainHeader}
        src={require(`../data/photo/photo_wooden_pellets/${data.woodenPellets.photos[0].photo}`)}></img>
        <button className="Main-Products-Inner-Button">{data.woodenPellets.mainHeader}<ArrowForwardIosIcon /></button>
      </Link>
    </div>
   </section>
 )
}

export default Products;