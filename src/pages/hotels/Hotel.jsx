import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from "react"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark,faLocationDot } from "@fortawesome/free-solid-svg-icons"



const Hotel = () => {
  const [slideNumber,setSlideNumber] = useState(0)
  const [open,setOpen] = useState(false) 


const photos = [
  {
    src:"https://www.majestickl.com/img/contango.jpg",
  },
  {
    src:"https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg",
  },
  {
    src:"https://img.freepik.com/premium-photo/luxury-hotel-reception-hall-office-with-decor-shelf_105762-1675.jpg",
  },
  {
    src:"https://media-cdn.tripadvisor.com/media/photo-s/0e/05/ca/90/palace-hotel-stairway.jpg",
  },
  {
    src:"https://www.verdissimo.com/wp-content/uploads/2019/06/hotel-decoration-trends-verdissimo.jpg",
  },
  
];

const handleOpen = (i)=>{
   setSlideNumber(i);
   setOpen(true);
  };

const handleMove = (direction) =>{
  let newSlideNumber;

  if(direction==="l"){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
  }else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
  }
   setSlideNumber(newSlideNumber)
};

  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="hotelContainer">
      
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}

        <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Ozuba avenue Lekki Lagos</span>
        </div>
        <span className="hotelDistance">
          Excellent location / 500m from center
        </span>
        <span className="hotelPriceHightlight">
          Book a stay over N90,000 at this property and get a free airport tax
        </span>
        <div className="hotelImages">
       {photos.map((photo,i)=>(
        <div className="hotelImgWrapper">
         <img onClick={()=>handleOpen(i)} 
         src={photo.src} alt="" className="hotelImg" /> 
        </div> 
         ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailText">
            <h1 className="hotelTitle">Stay in the heart of Island</h1>
            <p className="hotelDesc">
              Located 5-minutes walk from Lekki-Epe express way. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora, iure officiis asperiores rem consequuntur quod magni. Temporibus quasi repellendus quas unde voluptatem nobis, iure rerum laboriosam reiciendis quos provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium vel quos animi ea, corrupti placeat reprehenderit est delectus maiores voluptatum earum, error asperiores, reiciendis laboriosam molestiae quo magni nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora porro debitis ipsum officiis consectetur quae voluptatum iste harum est voluptate, voluptatem cumque repellendus, earum facilis mollitia quidem reprehenderit quibusdam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magni nesciunt accusantium sed inventore officiis quas necessitatibus iste cumque eum minus, facere nulla aspernatur praesentium exercitationem vitae libero. Reprehenderit, repellat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, velit veniam suscipit, provident sint tempora magni est accusamus aliquam soluta quia non dolorum aspernatur excepturi animi obcaecati consequatur itaque molestiae!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis dolorum, provident cum omnis temporibus corrupti tenetur recusandae alias unde dolores ratione itaque saepe ad optio, tempora repellendus voluptatem ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis, doloribus nisi nostrum neque temporibus ipsum impedit porro laudantium obcaecati consectetur, atque tempore vel a sapiente dolorum nesciunt autem dolorem.
            </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>perfect for night stay!</h1>
              <span>
                Located in the real heart of Lekki, this prorperty 
                has an excellent location of a cool and favourable atmosphere!
              </span>
              <h2>
                <b>N70,000</b> (8-nights) 
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          
        </div>
      </div>
      <MailList />
      <Footer/>
    </div>
    </div>
  );
};

export default Hotel