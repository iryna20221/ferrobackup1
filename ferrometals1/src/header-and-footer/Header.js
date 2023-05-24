import Nav from '../nav/Nav';
import Callback from './Callback';
import TopScroll from './TopScroll';
import Button from '@mui/material/Button';
// import "../app.css";
import dataRu from "../data/dataRu";
import dataEn from "../data/dataEn";
import dataLt from "../data/dataLt";
import dataPl from "../data/dataPl";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email'


const Header = ({data, navigateToTheTop, linkScroll, changeLanguage, open, handleClose, handleToggle, changeHeaderBackground, headerBackground}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;

    return (
        <header className="App-header w3-container w3-text" id={headerBackground}>
            <div className="Header-logo-container">
                    <img src={require('../img/logotype.png')} alt="Ferrometels LLC logotype" className='Header-logo'></img>
            </div>
                <div className="Header-info-container">
                    <div className="Header-contacts-container">
                            <div><p className="Header-contacts"><a className="Header-contacts" href={fullPhoneNumber}>
                                <CallIcon className='Header-icon' />{data.header.phoneNumber}</a></p></div>
                            <div><p className="Header-contacts"><a className="Header-contacts" href={fullEmail}>
                                <EmailIcon className='Header-icon' />{data.header.email}</a></p></div>
                            <div><Callback data={data} open={open} handleClose={handleClose} handleToggle={handleToggle} classname="Callback-button" /></div>
                    </div>
                <Nav className="Header-nav" data={data} navigateToTheTop={navigateToTheTop} linkScroll={linkScroll} changeHeaderBackground={changeHeaderBackground}/>
                </div>
                <div className="Header-language-buttons-container">
                                <Button onClick={() => changeLanguage(dataLt)} className="Header-language-button" variant="outlined" 
                                sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.Lt, color:"#9b9c9d", 
                                borderColor:"#9b9c9d", marginRight:"5%", ':hover': 
                                {border:data.MUIButtonBorder.Lt, borderColor:"#9b9c9d"}}}>LT</Button>
                                <Button onClick={() => changeLanguage(dataEn)} className="Header-language-button" 
                                variant="outlined" sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.En, 
                                color:"#9b9c9d", borderColor:"r#9b9c9d", marginRight:"5%", ':hover': 
                                {border:data.MUIButtonBorder.En, borderColor:"#9b9c9d"}}}>EN</Button>
                                <Button onClick={() => changeLanguage(dataPl)} className="Header-language-button" variant="outlined" 
                                sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.Pl, color:"#9b9c9d", 
                                borderColor:"#9b9c9d", marginRight:"5%", ':hover': 
                                {border:data.MUIButtonBorder.Pl, borderColor:"#9b9c9d"}}}>PL</Button>
                                <Button onClick={() => changeLanguage(dataRu)} className="Header-language-button" 
                                variant="outlined" sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.Ru, 
                                color:"#9b9c9d", borderColor:"#9b9c9d", ':hover': 
                                {border:data.MUIButtonBorder.Ru, borderColor:"#9b9c9d"}}}>RU</Button>
                                
                </div>
                <TopScroll />  
      </header>
    )
}

export default Header