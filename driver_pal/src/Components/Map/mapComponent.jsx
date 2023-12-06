// MapboxDirectionsComponent.jsx
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf'
import {OrderModel} from '../../utils/order_model'

const MapboxDirectionsComponent = ({ onMapClick,initialInteger,startLat,StartLong,EndLat,EndLong, perKmCost }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [myDistance, setMyInteger] = useState(initialInteger);
  
  const setDistance = (value) => {
    setMyInteger(value);
  };

  useEffect(() => {
    console.log("Logititude value of start"+startLat);
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFhc2hpbSIsImEiOiJja3k1eWF1MWgwb241Mm5veXcyZXh6NWw5In0.cA1NOC68hRLi3mFOJRb5yw';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      // style:'mapbox://styles/mapbox/dark-v11',
      // style:'mapbox://styles/mapbox/satellite-v9',
      center: [55.3894934, 25.1312747],
       zoom: 12
    });

    // const bounds = [
    //   [-123.069003, 45.395273],
    //   [-122.303707, 45.612333]
    // ];
    // map.current.setMaxBounds(bounds);
    console.log("This is the start Lat:"+ startLat +"     Start Long"+StartLong );
    const start = [startLat || 55.27975538881604, StartLong || 25.197331190272656];

    // if(startLat){
    //   start[0]= startLat;
    // }

    // if(StartLong){
    //   start[1]= StartLong;
    // }
  
    
    // 24.48410915439241, 54.6071295157067
    async function getRoute(end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      );
      const json = await query.json();
      console.log("This is the json object"+ json.waypoints[0]);
      
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      // Calculate distance using the Haversine formula
      //onst distance = calculateDistance(start[1], start[0], end[1], end[0]);
      const varib = turf.distance(start,end).toFixed(2);
      setDistance(varib);
      console.log("This is distance:"+varib);
      
      // Set the zoom level based on the distance
      //const zoom = calculateZoomLevel(distance);
        //console.log("This is zoom countent:"+zoom);
  map.current.flyTo({
    center: end,
    zoom: 10,
  });
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      if (map.current.getSource('route')) {
        map.current.getSource('route').setData(geojson);
      } else {
        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#00277b',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      }
           // Calculate distance using Haversine formula

    }

    map.current.on('load', () => {
    getRoute(start);
      map.current.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: start
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#00277b'
        }
      });
    });

    
    
    
   if(EndLat && EndLong){
    map.current.on('click', (event) => {
      // const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
      // const coords = [EndLat,EndLong];
      const coords1 = [EndLat,EndLong];
      getRoute(coords1);
      
          
      const end = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coords1
            }
          }
        ]
      };

      if (map.current.getLayer('end')) {
        map.current.getSource('end').setData(end);
      } else {
        map.current.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: coords1
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#00277b'
          }
        });
      }

     

 
    });
   }


   

    // Clean up on component unmount
    return () => {map.current.off('click');};
  }, [startLat,StartLong,EndLat,EndLong,onMapClick,perKmCost]);


  const handleButtonClick = () => {
    // Call the getRouteUpdate function when the button is clicked
    // getRouteUpdate();
  };

  

  return (<div style={{ position:"relative", width: '100%', height: '100%' }}>
    <div style={{ position:"absolute",bottom:"0",right:"50px",zIndex:"1000", marginBottom:"80px", width: '300px', height: '80px', backgroundColor:"white",
    display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", borderRadius:"20px",boxShadow:"20px 10px 50px rgba(25, 62, 228, 0.192",fontSize:".5rem",
    paddingTop:"20px",
    }}>
        <h3 style={{fontSize:"1.2rem",marginBottom:"0px"}}>Total Distance: {myDistance}km</h3>
        <h3 style={{fontSize:"1.2rem"}}>Estimated Cost: AED {(myDistance*perKmCost).toFixed(1)}</h3>
        
    </div>    
     <div ref={mapContainer} style={{position:"absolute",bottom:"0",left:"0", width: '100%', height: '100%' }} />
  </div>);
};

export default MapboxDirectionsComponent;
