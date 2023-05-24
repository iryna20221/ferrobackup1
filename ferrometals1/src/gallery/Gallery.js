import "./gallery.css"
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  
const Gallery = ({data, changeHeaderBackground}) => {
    return (
        <section className="Standart-Section Gallery-Container">
            <h2 className="Gallery-Title">{data.gallery.title}</h2>
            <div className="Gallery-Inner-Container">
                <Link className='Gallery-Link' to={data.menuPaths.photo} onClick={changeHeaderBackground}>
                        <img className="Gallery-Link-Image" 
                        src={require(`../data/photo/photo_photogallery/${data.gallery.photoPath}`)} alt={data.gallery.photoAltText}></img>
                        <button className="Gallery-Link-Button">{data.gallery.photoTitle}<ArrowForwardIosIcon /></button>
                </Link> 
                <Link className='Gallery-Link' to={data.menuPaths.video} onClick={changeHeaderBackground}>
                        <video className="Gallery-Link-Image" src={require(`../data/video/${data.gallery.videoPath}`)} preload autoPlay muted type="video/mp4">
                        {data.gallery.videoAltText}</video>
                        <button className="Gallery-Link-Button">{data.gallery.videoTitle}<ArrowForwardIosIcon /></button>
                </Link>
            </div>
        </section>
        // <div className="Gallery-container">{data.gallery}</div>
    )    
}

export default Gallery;