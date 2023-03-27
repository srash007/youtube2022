import "./Head.css"
import {
    faBed,
    faMountain,
    faUmbrellaBeach,
    faTree,
    faCity,
    faCalendar,
    faPerson
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import {DateRange} from 'react-date-range'
import { useState } from "react"


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

 const Head = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    
  return (
    <div className="Head">
        <div className="headContainer">
            <div className="headList">
                <div className="headListItem ">
                <FontAwesomeIcon icon={faCity}/>
                <span>En ville</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faMountain}/>
                <span>Montagne</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faUmbrellaBeach}/>
                <span>Plage</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faTree}/>
                <span>Forêt</span>
                </div>
                </div>
                <h1>Choisissez où vous reposer</h1>
                <div className="headSearch">
                    <div className="headSearchInput">
                        <FontAwesomeIcon icon={faBed} className="headIcon"/>
                        <input
                        type = "text"
                        placeholder="Où voulez vous allez ?"
                        className="headSearchInput"
                        />
                    </div>
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headIcon"/>
                        <span className="headSearchText">du au du </span>
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className = "date"
                            />
                    </div>
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headIcon"/>
                        <span>Personne</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" >
                            <span>Search</span> 
                        </button>
                    </div>  
                </div>
        </div>
    </div>
  )
}

export default Head
