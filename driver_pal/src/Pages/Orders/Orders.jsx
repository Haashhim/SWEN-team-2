import {React, useState} from 'react'
import './Orders.css'
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as FaIcons from 'react-icons/fa';

export const Orders = () => {
  const [isHandleArchive, setSignInButtonActive] = useState(false);
      const handArchiveOrder= () => {
        setSignInButtonActive(!isHandleArchive);
        alert("Order # 112-122343214-12313233 has been archived");
      };

  return (
    <div className="orders">
       <div className='dashboard'>
          <div className='dash'>
                <h3>Total Number of Orders</h3>
                <h4>55</h4>
          </div>
          <div className='dash'>
                <h3>Total Number of Distance</h3>
                <h4>245.5 km</h4>
          </div>
          <div className='dash'>
                <h3>Total Number of Hours</h3>
                <h4>23.5 hrs</h4>
          </div>
          <div className='dash'>
                <h3>Favourite Location</h3>
                <h4>Silicon Oasis</h4>
          </div>
       </div>
       <div className="header">
          <h1>Orders</h1>
          <div className="bar"></div>
       </div>
       <div className={isHandleArchive ? "order_content active" : "order_content"}>
          {/* <div className="marker"></div> */}
          <div className="order_header">
              <div className="order-info">
                <h3>ORDER PLACED</h3>
                <h4>Oct 27,2023</h4>
              </div>
              <div className="order-info">
                <h3>Total</h3>
                <h4>AED 270.75</h4>
              </div>
              <div className="order-info">
                <h3>Drop Location</h3>
                <h4>DSOA University Residence, Silicon Oasis</h4>
              </div>
              <div className="order-info">
                <h3>Order # 112-122343214-12313233</h3>
                <h4>Order Details</h4>
              </div>
          </div>
          <div className="order-detail">
            <div className="marker"></div>
            <div className="map-content">
            <Map
                mapboxAccessToken="pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw"
                initialViewState={{
                  longitude: 55.38948269677156,
                  latitude: 25.13136707428577,
                  zoom: 3.5,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11">
            </Map>
            </div>
            <div className="order-det">
                <div className="column">
                    <h3>Pickup Location: Dubai Mall, Dubai</h3>
                    <h3>Drop Location: DSOA Residence, Silicon Oasis</h3>
                    <h3>Elapsed Time: 45 mins</h3>
                </div>
                <div className="column">
                    <h3>Driver Name: Dubai Mall, Dubai</h3>
                    <h3>Taxi Plate Number: AUH 15 23232</h3>
                    <h3>Driver Rating: <FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar></h3>
                </div>
            </div>
            <div className="buttons">
              <a>REPEAT ORDER</a>
              <a onClick={handArchiveOrder} >ARCHIVE ORDER</a>
              {/* <a>DELETE ORDER</a> */}
            </div>
          </div>
       </div>

       <div className="order_content">
          {/* <div className="marker"></div> */}
          <div className="order_header">
              <div className="order-info">
                <h3>ORDER PLACED</h3>
                <h4>Oct 27,2023</h4>
              </div>
              <div className="order-info">
                <h3>Total</h3>
                <h4>AED 270.75</h4>
              </div>
              <div className="order-info">
                <h3>Drop Location</h3>
                <h4>DSOA University Residence, Silicon Oasis</h4>
              </div>
              <div className="order-info">
                <h3>Order # 112-122343214-12313233</h3>
                <h4>Order Details</h4>
              </div>
          </div>
          <div className="order-detail">
            <div className="marker"></div>
            <div className="map-content">
            <Map
                mapboxAccessToken="pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw"
                initialViewState={{
                  longitude: 55.38948269677156,
                  latitude: 25.13136707428577,
                  zoom: 3.5,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11">
            </Map>
            </div>
            <div className="order-det">
                <div className="column">
                    <h3>Pickup Location: Dubai Mall, Dubai</h3>
                    <h3>Drop Location: DSOA Residence, Silicon Oasis</h3>
                    <h3>Elapsed Time: 45 mins</h3>
                </div>
                <div className="column">
                    <h3>Driver Name: Dubai Mall, Dubai</h3>
                    <h3>Taxi Plate Number: AUH 15 23232</h3>
                    <h3>Driver Rating: <FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar></h3>
                </div>
            </div>
            <div className="buttons">
              <a>REPEAT ORDER</a>
              <a>ARCHIVE ORDER</a>
              {/* <a>DELETE ORDER</a> */}
            </div>
          </div>
       </div>

       <div className="order_content">
          {/* <div className="marker"></div> */}
          <div className="order_header">
              <div className="order-info">
                <h3>ORDER PLACED</h3>
                <h4>Oct 27,2023</h4>
              </div>
              <div className="order-info">
                <h3>Total</h3>
                <h4>AED 270.75</h4>
              </div>
              <div className="order-info">
                <h3>Drop Location</h3>
                <h4>DSOA University Residence, Silicon Oasis</h4>
              </div>
              <div className="order-info">
                <h3>Order # 112-122343214-12313233</h3>
                <h4>Order Details</h4>
              </div>
          </div>
          <div className="order-detail">
            <div className="marker"></div>
            <div className="map-content">
            <Map
                mapboxAccessToken="pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw"
                initialViewState={{
                  longitude: 55.38948269677156,
                  latitude: 25.13136707428577,
                  zoom: 3.5,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11">
            </Map>
            </div>
            <div className="order-det">
                <div className="column">
                    <h3>Pickup Location: Dubai Mall, Dubai</h3>
                    <h3>Drop Location: DSOA Residence, Silicon Oasis</h3>
                    <h3>Elapsed Time: 45 mins</h3>
                </div>
                <div className="column">
                    <h3>Driver Name: Dubai Mall, Dubai</h3>
                    <h3>Taxi Plate Number: AUH 15 23232</h3>
                    <h3>Driver Rating: <FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar><FaIcons.FaStar></FaIcons.FaStar></h3>
                </div>
            </div>
            <div className="buttons">
              <a>REPEAT ORDER</a>
              <a>ARCHIVE ORDER</a>
              {/* <a>DELETE ORDER</a> */}
            </div>
          </div>
       </div>
       
      

    </div>
  )
}
