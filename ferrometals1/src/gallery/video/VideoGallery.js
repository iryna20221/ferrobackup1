import "../gallery.css";
import "../../app.css"

const VideoGallery = ({data}) => {   
  return (
    <section className="Standart-Section Video-Gallery-Container">
        <h3 className="Video-Gallery-Heading">{data.videoGallery.videoMainHeader}</h3>
        <article className="Video-Gallery-Inner-Container">
            {data.videoGallery.videos.map((item) => 
                <figure key={item.id} className="Video-Container">
                    <video className="Video" src={require(`../../data/video/${item.videoRecord}`)} controls preload type="video/mp4">
                    {data.videoGallery.videoNotSupportMessage}</video>
                    <figcaption className="Video-Caption">{item.captionText}</figcaption>
                </figure>
            )}
        </article>
    </section>
    )
} 

export default VideoGallery;