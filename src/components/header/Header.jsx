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


const Header = () => {
 const [openDate,setOpenDate] = useState(false)
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
const [openOptions,setOpenOptions] = useState(false)
const [options,setOptions] = useState({
  adult: 1,
  children: 0,
  room: 1,
});

  return (
    <div className="header">
      <div className="headerContainer">
         
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
      <h1 className="headerTitle">A lifetime of discount? it's Genius.</h1>
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
          className="headerSearchInput" />
        </div>
        <div className="headersearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/mm/yyyy")}`} 
        to {`${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
        {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>}
        </div>
        
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span className="headerSearchText">{`${options.adult}adult . ${options.children} children . ${options.room} room`} </span>
        <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
          <button className="opionCounterButton">-</button>
          <span className="optionCounterNumber">1</span>
          <button className="opionCounterButton">+</button>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
          <button className="opionCounterButton">-</button>
          <span className="optionCounterNumber">0</span>
          <button className="opionCounterButton">+</button>
          </div>
          <div className="optionItem">
            <span className="optionText">Roomm</span>
          <button className="opionCounterButton">-</button>
          <span className="optionCounterNumber">1</span>
          <button className="opionCounterButton">+</button>
          </div>
        </div>
        <div className="headersearchItem">
          <button className="headerBtn">Search</button>
        </div>
        
      </div>
    </div>
    </div> 
  )
}

export default Header