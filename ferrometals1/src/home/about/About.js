import AboutGearIcon from "./AboutGearIcon";
import "../home.css"

const About = ({data}) => {
    return (
        <section className="About-Main-Container">
            <article className="About-Container">
            <div className="About-Text-Container">
                <p className="About-Inner-Text">{data.about.mainText[0]}</p>
                <p className="About-Inner-Text">{data.about.mainText[1]}</p>
            </div>
            <div className="About-Photo-Container">
            <img className="About-Decoration" src={require(`../../img/ferrometals_decor.png`)} alt={data.about.altText}></img>
                {data.about.photos[0].map((item) => 
                            <img key={item} className="About-Picture" src={require(`../../data/photo/photo_about/${item}`)} alt={data.about.altText}></img>
                        )}
            </div>
            <div className="About-Photo-Container Extra-Photo-Container">
                {data.about.photos[1].map((item) => 
                            <img key={item} className="About-Picture" src={require(`../../data/photo/photo_about/${item}`)} alt={data.about.altText}></img>
                        )}
            </div>
            <div className="About-Text-Container Extra-Text-Container">
                <p className="About-General-Text About-Title">{data.about.mainText[2]}</p>
                <div className="About-List">
                    {data.about.listItems.map((item) => 
                        <p key={item} className="About-General-Text About-List-Item"><AboutGearIcon/> {item}</p>
                    )}
                </div>
                <p className="About-General-Text About-Detailed-Info">
                    <svg fill="rgba(20,172,147,255)" height="30px" width="30px" version="1.1" id="Layer_1"  viewBox="0 0 511.999 511.999" stroke="rgba(20,172,147,255)">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,121.862c-73.346,0-133.019,59.671-133.019,133.019S182.654,387.899,256,387.899s133.019-59.671,133.019-133.019 S329.346,121.862,256,121.862z M256,354.508c-54.934,0-99.627-44.692-99.627-99.627s44.692-99.627,99.627-99.627 c54.935,0,99.627,44.692,99.627,99.627S310.934,354.508,256,354.508z"/> </g> </g> <g> <g> <path d="M498.553,214.41l-47.521-9.429c-4.567-17.936-11.559-35.036-20.882-51.063l26.77-40.021 c4.43-6.623,3.563-15.453-2.071-21.088l-35.657-35.657c-5.635-5.635-14.466-6.502-21.088-2.071l-39.644,26.518 c-16.168-9.592-33.455-16.797-51.615-21.513l-9.253-46.639C296.041,5.631,289.183,0,281.214,0h-50.429 c-7.968,0-14.826,5.631-16.376,13.447l-9.253,46.639c-18.159,4.716-35.446,11.921-51.614,21.513L113.898,55.08 c-6.625-4.432-15.456-3.563-21.088,2.071L57.153,92.81c-5.635,5.635-6.502,14.465-2.071,21.088l26.77,40.021 c-9.323,16.027-16.315,33.128-20.882,51.063l-47.521,9.429C5.631,215.959,0,222.818,0,230.786v50.429 c0,7.968,5.632,14.826,13.447,16.376l48.135,9.549c4.693,17.532,11.713,34.243,20.965,49.901L55.08,398.102 c-4.43,6.623-3.563,15.455,2.071,21.088l35.657,35.657c5.634,5.635,14.465,6.5,21.088,2.071l41.438-27.717 c15.524,8.995,32.052,15.811,49.355,20.353l9.72,48.997c1.55,7.816,8.408,13.447,16.376,13.447h50.429 c7.968,0,14.826-5.631,16.376-13.447l9.72-48.997c17.302-4.542,33.831-11.359,49.355-20.353l41.438,27.717 c14.747,9.864,22.941-3.925,56.745-37.729c5.635-5.634,6.502-14.465,2.071-21.088l-27.467-41.062 c9.253-15.658,16.273-32.37,20.965-49.901l48.135-9.549c7.815-1.55,13.447-8.408,13.447-16.376v-50.429 C512,222.818,506.369,215.959,498.553,214.41z M478.609,267.506l-45.193,8.966c-6.568,1.302-11.723,6.404-13.094,12.96 c-4.389,20.995-12.682,40.717-24.646,58.616c-3.754,5.617-3.753,12.945,0.003,18.561l25.863,38.665l-16.271,16.27l-38.953-26.056 c-5.571-3.726-12.828-3.761-18.434-0.087c-17.828,11.682-37.404,19.753-58.188,23.986c-6.594,1.342-11.736,6.512-13.045,13.111 l-9.146,46.111h-23.011l-9.148-46.112c-1.309-6.599-6.451-11.768-13.045-13.111c-20.784-4.233-40.361-12.304-58.188-23.986 c-5.604-3.674-12.865-3.64-18.434,0.087l-38.953,26.056l-16.269-16.271l25.863-38.665c3.757-5.616,3.758-12.944,0.003-18.561 c-11.964-17.899-20.256-37.621-24.646-58.616c-1.37-6.556-6.525-11.658-13.094-12.96l-45.192-8.964v-23.011l44.725-8.873 c6.646-1.319,11.836-6.521,13.136-13.171c4.182-21.374,12.389-41.463,24.395-59.71c3.69-5.608,3.663-12.88-0.07-18.46 l-25.12-37.553l16.271-16.271l37.266,24.928c5.626,3.762,12.966,3.757,18.586-0.014c18.334-12.302,38.57-20.739,60.143-25.076 c6.612-1.329,11.775-6.505,13.087-13.119l8.685-43.784h23.011l8.686,43.784c1.312,6.615,6.475,11.79,13.087,13.119 c21.575,4.336,41.809,12.773,60.142,25.075c5.621,3.772,12.962,3.778,18.586,0.014l37.266-24.928l16.27,16.271l-25.12,37.554 c-3.733,5.58-3.76,12.852-0.07,18.46c12.005,18.247,20.213,38.335,24.395,59.71c1.3,6.649,6.49,11.852,13.136,13.171l44.725,8.873 V267.506z"/> </g> </g> <g> <g> <path d="M309.639,213.025c-6.52-6.521-17.092-6.521-23.611-0.001l-48.296,48.296l-11.758-11.758 c-6.519-6.519-17.091-6.519-23.611,0c-6.52,6.519-6.52,17.091,0,23.611l23.564,23.564c6.52,6.52,17.091,6.52,23.611,0 l60.101-60.101C316.159,230.117,316.159,219.546,309.639,213.025z"/> </g> </g> </g>

                    </svg>
                    <span className="About-Text-Block">{data.about.mainText[3]}</span>
                </p>
            </div>
            <div className="About-Picture-Container">
                <img className="About-Decoration" src={require(`../../img/ferrometals_decor.png`)} alt={data.about.altText}></img>
                <img className="About-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[1]}`)} alt={data.about.altText}></img>
                <img className="About-Picture Detailed-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[0]}`)} alt={data.about.altText}></img>
                <img className="About-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[2]}`)} alt={data.about.altText}></img>
            </div>
            {/* <div className="About-Text-Container">
                <AboutPhotoSlider />
            </div> */}
        </article>
        </section>
    )
}

export default About;