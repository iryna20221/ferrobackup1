import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CallbackButton from './CallbackButton';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
// import "../app.css";

const Footer = ({data, handleToggle, navigateToTheTop, linkScroll}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;
    return (
        <footer className="App-footer">
            <img src={require('../img/nameplate.jpg')} alt="Ferrometels LLC nameplate" className="Footer-Nameplate"></img>
            <div className='Footer-Info-Container'>
                <Link className="Footer-Info" to={data.menuPaths.contacts}><LocationOnIcon/>{data.footer.address}</Link>
                <a className="Footer-Info" href={fullPhoneNumber}><CallIcon className='Header-icon' />{data.header.phoneNumber}</a>
                <a className="Footer-Info" href={fullEmail}><EmailIcon className='Header-icon' />{data.header.email}</a>
                <CallbackButton data={data} handleToggle={handleToggle} classname="Callback-button Footer-Callback" />
            </div>
            <div className='Footer-Links-Container'>
                <Link className='Footer-Link' to={data.menuPaths.home} onClick={navigateToTheTop}>- {data.menuItems.home}</Link>
                <HashLink className='Footer-Link' to={data.menuPaths.about} onClick={linkScroll}>- {data.menuItems.about}</HashLink>
                <Link to={data.menuPaths.products} className='Footer-Link' onClick={linkScroll}>- {data.menuItems.products}</Link>
            </div>
            <div className='Footer-Links-Container'>
            <Link className='Footer-Link' to={data.menuPaths.catalog} onClick={linkScroll}>- {data.menuItems.catalog}</Link>
            <Link className='Footer-Link' to={data.menuPaths.gallery} onClick={linkScroll}>- {data.menuItems.gallery}</Link>
            <Link className='Footer-Link' to={data.menuPaths.contacts} onClick={linkScroll}>- {data.menuItems.contacts}</Link>
            </div>
            <div className='Footer-Info-Container'>
                <p className="Footer-Copyright">{data.footer.copyright}</p>
                <Link className="Footer-Info" to={data.menuPaths.privacypolicy} onClick={linkScroll}>{data.footer.privacyPolicy}</Link>
                <Button variant="text" sx={{ fontFamily: data.MUIFont, fontSize: "110%", fontWeight: "500", textTransform: "capitalize", textAlign: "left", padding: "0", color:"rgba(20,172,147,255)", borderColor:"rgba(20,172,147,255)", marginRight:"3%", 
                ':hover': {borderColor:"rgba(20,172,147,255)"}}}>{data.footer.siteDeveloper}</Button>
            </div>
      </footer>
    )
}

export default Footer