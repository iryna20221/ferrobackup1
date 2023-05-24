import "../gallery.css";
// import "../../app.css"

const PhotoGallery = ({data}) => {
    return (
        <section className="Standart-Section Video-Gallery-Container">
            <h3 className="Video-Gallery-Heading">{data.photoGallery.photoMainHeader}</h3>
            <article className="Video-Gallery-Inner-Container">
                {data.photoGallery.photos.map((item) => 
                    <figure key={item.id} className="Photo-Container">
                        <img className="Photo" src={require(`../../data/photo/photo_photogallery/${item.photo}`)} 
                        alt={item.captionText} />
                        <figcaption className="Video-Caption">{item.captionText}</figcaption>
                    </figure>
                )}
            </article>
        </section>
        )   
}

export default PhotoGallery;