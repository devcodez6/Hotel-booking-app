import  './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://media.cntraveler.com/photos/62eff656a715e3de02495e3e/16:9/w_3023,h_1700,c_limit/Rome%20Cavalieri%20-%20La%20Pergola%20-%20First%20and%20only%203%20star%20Michelin%20restaurant%20in%20Rome.jpg" alt="" className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Chevron Drive Apartments</h1>
            <span className="siDistance">500m from Express</span>
            <span className="siTaxiOp">Free airport</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bedroom . 21msq 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, grab this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.6</button>
            </div>
            <div className="siDeatailTexts">
                <span className="siPrice">N20,000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                
            </div>
            <button className="siCheckButton">See availability</button>
        </div>
    </div>
  )
}

export default SearchItem