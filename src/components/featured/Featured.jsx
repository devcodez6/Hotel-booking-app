import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.propertypro.ng/medium/3bdrm-terrace-duplex-duplex-with-bq-8C0WrSdBNmf8CAgo1JO0.jpeg" />
            <div className='featuredTitle'>
                <h1>Ilupeju</h1>
                <h2>325 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.nigeriapropertycentre.com/properties/images/thumbs/1735569/064621b0b12909-newly-built-4bedroom-terrace-duplex-with-bq-terraced-duplexes-for-sale-oniru-victoria-island-lagos.jpg" alt="" className="featuredImg" />
            <div className= "featuredTitle">
                <h1>Victoria Island</h1>
                <h2>213 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://nairametrics.com/wp-content/uploads/2022/02/Lekki.png" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Lekki Face-1</h1>
                <h2>390 properties</h2>
            </div>
        </div>    
        <div className="featuredItem">
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BrTk1cJ72X6VFEj8i5U9XdxDNUAkRT7L5g&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Ikeja GRA </h1>
                <h2>325 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured