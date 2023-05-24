import { Link } from 'react-router-dom';
import GearIcon from './GearIcon';


const FirstPage = ({data, handleToggle, changeHeaderBackground, gearSpin}) => {
    return (
            <article className='FirstPage-Main-Container w3-container w3-text'>
                <div className='FirstPage-Title-Container'>
                    <h1>{data.home.firstPage.name}</h1>
                    <p className='FirstPage-Description'>{data.home.firstPage.description}</p>
                    <div className='FirstPage-Title-Buttons-Container'>
                        <button onClick={handleToggle} className='FirstPage-Title-Button'>{data.home.firstPage.button}</button>
                        <Link to={data.menuPaths.catalog} onClick={changeHeaderBackground}><button className='FirstPage-Title-Button'>{data.home.firstPage.link}</button></Link>
                        {/* <button className='FirstPage-Title-Button'>{data.home.firstPage.link}</button> */}
                    </div>
                </div>
                <div className='FirstPage-Info-Container'>
                    <ul>
                        {data.home.firstPage.info.map( el =>
                            <li key={el} className='FirstPage-Description Gear-List-Container'>
                                <p className='GearP w3-spin'><GearIcon/></p>
                                 <p>{el}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="About-Top-Container" id='about'></div>
            </article>
     

    )
}

// {gearSpin ? <p className='GearP w3-spin'><GearIcon/></p> : <p className='GearP'><GearIcon/></p>}

export default FirstPage;