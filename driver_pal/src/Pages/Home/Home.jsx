import {React, useState, useRef, useEffect} from 'react'
import './Home.css'
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import SearchBox from '../../components/SearchBar/SearchBox';
import MapComponent from '../../components/mapComponent';
import {CarType } from './CarType'
import Sedan from '../../assets/SEDAN.png'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ParentComponent from '../../components/parentComponent';


function Home() {
  const [isInputFocused, setCarTypeIndex] = useState(0);
  const startingCoordinates = [-74.5, 40];
  const endingCoordinates = [-74.6, 40];
  const [selectedLocationStart, setSelectedLocationStart] = useState(null);
  const [selectedLocationEnd, setSelectedLocationEnd] = useState(null);

  // Callback function to handle the selected location and event
  const handleLocationSelectionStart = ({ location, event }) => {
    console.log('Selected Location:', location);
    // You can perform further actions with the selected location
    setSelectedLocationStart(location);
  };

   // Callback function to handle the selected location and event
   const handleLocationSelectionEnd = ({ location, event }) => {
    console.log('Selected Location:', location);
    // You can perform further actions with the selected location
    setSelectedLocationEnd(location);
  };
  
  return (
    <div className="home">
       {/* <div className='dashboard'>
        <div className='dash'></div>
        <div className='dash'></div>
        <div className='dash'></div>
        <div className='dash'></div>
       </div> */}
       
      <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
      {/* <p>From Latiture: {selectedLocationStart && selectedLocationStart.geometry.coordinates[0]}</p>
      <p>From Longitude: {selectedLocationStart && selectedLocationStart.geometry.coordinates[1]}</p>

      <p>To Latiture: {selectedLocationEnd && selectedLocationEnd.geometry.coordinates[0]}</p>
      <p>To Longitude: {selectedLocationEnd && selectedLocationEnd.geometry.coordinates[1]}</p> */}
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
              <div className="payement-item">Credit</div>
              <div className="payement-item">Cash</div>
            </div>
            <h3 className="dest-text black">Select Car</h3>
            <div className="car-types">
            {CarType.map((item, index) => {
              // console.log(item);
              return (
                <div className="car-item">
                <img src={item.car_image} alt="" />
                <h3 className='car-text'>{item.car_name}</h3>
              </div>
              );
            })} 
             
            </div>
           
            </div>
        </div>
        <div className="right-map">
            <h3>Map</h3>
            <div className="right-content map">
           
            {/* <Map
                mapboxAccessToken="pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw"
                
                initialViewState={{
                  // longitude: 55.38948269677156,
                  // latitude: 25.13136707428577,
                  longitude: 55.38949342464493,
                  latitude: 25.13127479878864,
                  
                  zoom: 15,
                }}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                //mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                // mapStyle="mapbox://styles/mapbox/outdoors-v12"
                // https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw 

                >

            </Map> */}
          {/* <MapComponent startingCoordinates={startingCoordinates} endingCoordinates={endingCoordinates} /> */}
            <MapComponent 
            startLat={selectedLocationStart && selectedLocationStart.geometry.coordinates[0]}
            StartLong={selectedLocationStart &&  selectedLocationStart.geometry.coordinates[1]}
            EndLat={selectedLocationEnd && selectedLocationEnd.geometry.coordinates[0]}
            EndLong={selectedLocationEnd && selectedLocationEnd.geometry.coordinates[1]}
            />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Home
