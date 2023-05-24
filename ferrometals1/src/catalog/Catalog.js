// import "./catalog.css"
import "../gallery/gallery.css";
// import "../app.css"

// const PhotoGallery = ({data}) => {
//     return (
//         <section className="Standart-Section Video-Gallery-Container">
//             <h3 className="Video-Gallery-Heading">{data.photoGallery.photoMainHeader}</h3>
//             <article className="Video-Gallery-Inner-Container">
//                 {data.photoGallery.photos.map((item) => 
//                     <figure key={item.id} className="Video-Container">
//                         <img className="Video" src={require(`../../data/photo/${item.photo}`)} alt={item.captionText} />
//                         <figcaption className="Video-Caption">{item.captionText}</figcaption>
//                     </figure>
//                 )}
//             </article>
//         </section>
//         )   
// }
const Catalog = ({data}) => {
    return (
        // <div className="Catalog-container">{data.catalog}</div>
        <section className="Standart-Section Video-Gallery-Container">
            <h3 className="Video-Gallery-Heading">{data.catalog.title}</h3>
            <article className="Video-Gallery-Inner-Container">
                {data.catalog.photos.map((item) => 
                    <figure key={item.id} className="Video-Container">
                        <figcaption className="Video-Caption">{item.captionText}</figcaption>
                        <img className="Video" src={require(`../data/photo/photo_catalog/${item.photo}`)} alt={item.captionText} />
                    </figure>
                )}
            </article>
        </section>
        )
}

export default Catalog;