// import { useEffect, useState } from "react";
// import "../home.css"

// const AboutPhotoSlider = ({data}) => {

//     // var myIndex = 0;
//     // var number = 0;
//     // setTimeout(number++, 1000);

//     // function carousel() {
//     //     var i;
//     //     var x = document.getElementsByClassName("mySlides");
//     //     for (i = 0; i < x.length; i++) {
//     //       x[i].style.display = "none";  
//     //     }
//     //     myIndex++;
//     //     if (myIndex > x.length) {myIndex = 1};
//     //     x[myIndex-1].style.display = "block";
//     //     setTimeout(carousel, 1000);
//     //   }

//     // useEffect(() => {
//     //     carousel();
//     // }, [number]);

//     // return (
//     //     <article className="About-Container">
//     //         <div className="w3-content w3-section About-Inner-Container">
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about2.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about3.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about4.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about5.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about6.jpg`)} alt={data.about.altText} ></img>
//     //             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/photo_about7.jpg`)} alt={data.about.altText} ></img>
//     //         </div>
//     //     </article>
//     // )


//     const sliderSet = [
//        "photo_about.jpg", "photo_about2.jpg", "photo_about3.jpg"
//     ];

//     let idInterval;
//     const [currentSlide, setCurrentSlide] = useState(sliderSet[0]);
//     useEffect(() => {
//         idInterval = setInterval(() => {if (sliderSet.indexOf(currentSlide) < sliderSet.length - 1) {
//             setCurrentSlide(sliderSet[sliderSet.indexOf(currentSlide) + 1]);
//             console.log(currentSlide);
//         } else {
//             setCurrentSlide(sliderSet[0]);
//             console.log(currentSlide);
//             clearInterval(idInterval);
//         }}, 1000);
//     }, []);
    
    
    

//     // idInterval = setInterval(changeSlide, 2000);

//     // useEffect(() => {
//     //     setInterval(changeSlide, 2000);
//     // }, []);


//     return (
//         <article className="About-Container">
//             <div className="About-Inner-Container">
//             <img className="mySlides About-Picture" src={require(`../../data/photo/photo_about/${currentSlide}`)} alt={data.about.altText} ></img>
//             </div>
//         </article>
//     )

// }

// export default AboutPhotoSlider;




// import React, { Component } from "react";
// import Slider from "react-slick";
// import "../home.css"

// export default class AboutPhotoSlider extends Component {
    
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         {/* <h2> Single Item</h2> */}
//         <Slider {...settings}>
//           <div className="About-Slide-Container">
//             <figure>
//                 <img src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[1]}`)}></img>
//             </figure>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }