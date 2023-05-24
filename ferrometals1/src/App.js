import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Catalog from './catalog/Catalog';
import Products from './products/Products';
import TransportingAndNearMachineEquipmentAndMachinesForWoodworking from 
'./products/transporting_and_near_machine_equipment_and_machines_for_woodworking/Transporting_and_near_machine_equipment_and_machines_for_woodworking';
import EquipmentForWasteProcessing from './products/equipment_for_waste_processing/Equipment_for_waste_processing';
import RoundWoodAccountingScanner from './products/round_wood_accounting_scanner/Round_wood_accounting_scanner';
import WoodenPellets from './products/wooden_pellets/Wooden_pellets';
import Gallery from './gallery/Gallery';
import VideoGallery from './gallery/video/VideoGallery';
import PhotoGallery from './gallery/photo/PhotoGallery';
import Contacts from './contacts/Contacts';
import Error from './error/Error';
import Header from './header-and-footer/Header';
import Footer from './header-and-footer/Footer';
import PrivacyPolicy from './header-and-footer/Privacypolicy';
import Address from './header-and-footer/Address';
import dataEn from "./data/dataEn";
import "./app.css"

function App() {
  const [data, setData] = useState(dataEn);
  const changeLanguage = (currentData) => {
    setData(currentData);
  }

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [headerBackground, setHeaderBackground] = useState("");
  const changeHeaderBackground = () => {
    setHeaderBackground("headerBackgroundChange");
}

useEffect(() => {
  const handleScroll = event => {
    if(window.pageYOffset < 10 && window.location.pathname === "/") {
        setHeaderBackground("");
    } else {
        setHeaderBackground("headerBackgroundChange");
    }

  };
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
})

const navigateToTheTop = () => {
  window.scrollTo({top: 0})
}

const linkScroll = () => {
  changeHeaderBackground();
  window.scrollTo({top: 0})
}

  return (
    <div className="App">
<Header changeLanguage={changeLanguage} data={data} open={open} handleClose={handleClose} handleToggle={handleToggle} 
setHeaderBackground={setHeaderBackground} changeHeaderBackground={changeHeaderBackground} navigateToTheTop={navigateToTheTop} linkScroll={linkScroll}  headerBackground={headerBackground} />
      <Routes> 
        <Route path={data.menuPaths.home} element={<Home data={data} handleToggle={handleToggle} changeHeaderBackground={changeHeaderBackground}/>} />
        <Route path={data.menuPaths.catalog} element={<Catalog data={data} />} />
        <Route path={data.menuPaths.products} element={<Products data={data} changeHeaderBackground={changeHeaderBackground} />} />
        <Route path={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} 
        element={<TransportingAndNearMachineEquipmentAndMachinesForWoodworking data={data} />} />
        <Route path={data.menuPaths.equipmentForWasteProcessing} element={<EquipmentForWasteProcessing data={data} />} />
        <Route path={data.menuPaths.roundWoodAccountingScanner} element={<RoundWoodAccountingScanner data={data} />} />
        <Route path={data.menuPaths.woodenPellets} element={<WoodenPellets data={data} />} />
        <Route path={data.menuPaths.gallery} element={<Gallery data={data} changeHeaderBackground={changeHeaderBackground} />} />
        <Route path={data.menuPaths.video} element={<VideoGallery data={data} />} />
        <Route path={data.menuPaths.photo} element={<PhotoGallery data={data} />} />
        <Route path={data.menuPaths.contacts} element={<Contacts data={data} />} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />
        <Route path={data.menuPaths.address} element={<Address data={data} />} />
        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      <Footer data={data} changeHeaderBackground={changeHeaderBackground} linkScroll={linkScroll} navigateToTheTop={navigateToTheTop} open={open} handleClose={handleClose} handleToggle={handleToggle}/> 
    </div>
  );
}

export default App;