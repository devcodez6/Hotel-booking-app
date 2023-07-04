import "./header.css"
import {faBed, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import {faPlane} from "@fortawesome/free-solid-svg-icons"
import {faCar} from "@fortawesome/free-solid-svg-icons"
import {faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DateRange } from "react-date-range";
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import {useNavigate} from "react-router-dom"



const Header = ({type}) => {
 const [openDate,setOpenDate] = useState(false)
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
const [destination,setDestination] = useState("")
const [openOptions,setOpenOptions] = useState(false)
const [options,setOptions] = useState({
  adult: 1,
  children: 0,
  room: 1,
});

const navigate = useNavigate ()
const handleOption = (name, operation) =>{
  setOptions(prev =>{return {
    ...prev,[name]: operation ==="i" ? options[name] +1 : options[name] -1,
  };
});
};


const handleSearch = () => {
  navigate("/hotels",{state:{destination,date,options}})
}


  return (
    <div className="header">
      <div className= {type === "list" ? "headerContainer listMode" : "headerContainer"}>
         
      <div className="headerList">
        <div className="headerListItem active" >
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attraction</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
      {type !== "list" &&
        <><h1 className="headerTitle">A lifetime of discount? it's Genius.</h1>
      <p className="headerDesc">
        Get rewraded for your travels!! unlock instant saving of 10% of more 
        with a free Devbooking acount.
      </p>
      <button className="headerBtn">sign/Register</button>
      <div className="headerSearch">
        <div className="headersearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input type="text"
         placeholder="where are you going?"
          className="headerSearchInput"
          onChange={e=>setDestination(e.target.value)}
          />
        </div>
        {/* <div className="headersearchItem"> */}
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, 
        "dd/mm/yyyy"
        )} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
        {openDate && (<DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>)}
        {/* </div> */}

        
        <div className="headersearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult}adult . ${options.children} children . ${options.room} room`} </span>
        {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
          <button  disabled={options.adult <= 1}
           className="opionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
          <span className="optionCounterNumber">{options.adult}</span>
          <button className="opionCounterButton"onClick={() => handleOption("adult", "i")}>+</button>
          </div>
          </div>
          

          <div className="headersearchItem">
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
          <button disabled={options.children <= 0}
           className="opionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
          <span className="optionCounterNumber">{options.children}</span>
          <button className="opionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
          </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
          <button disabled={options.room <= 1}
           className="opionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
          <span className="optionCounterNumber">{options.room}</span>
          <button className="opionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
          </div>
          </div>
          </div>
        </div>}
        </div>
        <div className="headersearchItem">
          <button className="headerBtn" onClick={handleSearch}>Search</button>
        </div>
        </div></>}
      </div>
    </div>
     
  )
}

export default Header