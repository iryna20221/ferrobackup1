import "./home.css";
import FirstPage from "./FirstPage";
import About from "./about/About";

const Home = ({data, handleToggle, changeHeaderBackground, gearSpin}) => {
    return (
        <>
        <FirstPage data={data} handleToggle={handleToggle} changeHeaderBackground={changeHeaderBackground} gearSpin={gearSpin} />
        <About data={data}/>
        </>
    )
}

export default Home;