import {React, useState, useRef, useEffect} from 'react'
import './Home.css'
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import SearchBox from '../../components/SearchBar/SearchBox';
import MapComponent from '../../components/Map/mapComponent';
import {CarType } from './CarType'
import Sedan from '../../assets/SEDAN.png'
import { Timer } from '../../components/Timer/Timer';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ParentComponent from '../../components/Map/parentComponent';



function Home() {
  const [carTypeIndex, setCarTypeIndex] = useState(0);
  const startingCoordinates = [-74.5, 40];
  const endingCoordinates = [-74.6, 40];
  const [selectedLocationStart, setSelectedLocationStart] = useState(null);
  const [selectedLocationEnd, setSelectedLocationEnd] = useState(null);
  const [eventLatitude, seteventLatitude] = useState(0);
  const [eventLongitude, seteventLongitude] = useState(0);

  // Callback function to receive values from Timer component
  const handleTimerClick = (latitude, longitude) => {
    seteventLatitude(latitude);
    seteventLongitude(longitude);
  };

  // Callback function to handle the selected location and event
  const handleLocationSelectionStart = ({ location, event }) => {
    console.log('Selected Location:', location);
    // You can perform further actions with the selected location
    setSelectedLocationStart(location);
  };

  const handleCarTypeIndex = (index) => {
    setCarTypeIndex(index);
    console.log("Selected car Type:"+index);
  };

   // Callback function to handle the selected location and event
   const handleLocationSelectionEnd = ({ location, event }) => {
    console.log('Selected Location:', location);
    // You can perform further actions with the selected location
    setSelectedLocationEnd(location);
  };
  const handleMapClick = (event) => {
    // Handle map click event
    console.log('Map clicked!', event.lngLat);
    // ... (add your custom logic here)
  };
  
  return (
    
    
    <div className="home">
      {/* {eventLatitude} {eventLongitude} 1 2 60 60 1000*/}
    <Timer onTimerClick={handleTimerClick} duration={1 * 2 * 60 * 60 * 1000}/> 
     <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
    </div>
     <div className="main">
      <div className="left">
          <h3>Order</h3>
          <div className="left-content">
          <h3 className="dest-text">Where from?</h3>
          {/* <SearchBox/> */}
          <SearchBox callback={handleLocationSelectionStart} />
          <h3 className="dest-text">Where to?</h3>
          <SearchBox callback={handleLocationSelectionEnd} />
          <div className="work-type">
            <a href="#">Home</a>
            <a href="#">Work</a>
            <a href="#">Mobile</a>
          </div>
          <h3 className="dest-text black">Payement Method</h3>
          <div className="payement-types">
            <div className="payement-item active">Credit</div>
            <div className="payement-item">Cash</div>
          </div>
          <h3 className="dest-text black">Select Car</h3>
          <div className="car-types">
          {CarType.map((item, index) => {
            // console.log(item);
            return (
              <div className={carTypeIndex==index ? "car-item active":"car-item"}  onClick={() => handleCarTypeIndex(index)}>
              <img src={item.car_image} alt="" />
              <h3 className='car-text'>{item.car_name}-AED{item.per_km_cost}</h3>
             
            </div>
            );
          })} 
           
          </div>
          <h3 className="dest-text black">Comments</h3>
          <textarea></textarea>
          <button className='order_btn' >Order</button>
         </div>
          </div>
         <div>
        </div>
         <div className="right-map">
          <h3>Map</h3>
          <div className="right-content map">
         <MapComponent 
          onMapClick={handleMapClick}
          startLat = {selectedLocationStart?.geometry.coordinates[0]}
          StartLong={selectedLocationStart &&  selectedLocationStart.geometry.coordinates[1]}

          // EndLat={selectedLocationEnd && selectedLocationEnd.geometry.coordinates[0]}
          EndLat = {eventLongitude ? eventLongitude: selectedLocationStart?.geometry.coordinates[0]}
          // EndLong={selectedLocationEnd && selectedLocationEnd.geometry.coordinates[1]}
          EndLong = {eventLatitude ? eventLatitude: selectedLocationStart?.geometry.coordinates[0]}
          perKmCost={CarType[carTypeIndex].per_km_cost}
          /> :
          
          </div>
      </div>
     </div>
  </div>

  )
}

export default Home
