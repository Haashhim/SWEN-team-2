import React from 'react';
import Sedan from '../../assets/SEDAN.png'
import Limo from '../../assets/LIMO.png'
import Minivan from '../../assets/MINIVAN.png'
import Suv from '../../assets/SUV.png'
import Supercar from '../../assets/SUPERCAR.png'
import Campervan from '../../assets/CAMPERVAN.png'

export const CarType = [
  {
    car_id: 1,
    car_name: 'Sedan',
    no_of_people_can_fit: 5,
    car_image:Sedan,
    per_km_cost:1.2,
    cname:"car-text"
  },
  {
    car_id: 2,
    car_name: 'SUV',
    no_of_people_can_fit: 5,
    car_image: Suv,
    per_km_cost:1.4,
    cname:"car-text"
  },
  {
    car_id: 3,
    car_name: 'Supercar',
    no_of_people_can_fit: 5,
    car_image: Supercar,
    per_km_cost:2.2,
    cname:"car-text"
  },
  {
    car_id: 4,
    car_name: 'Limo',
    no_of_people_can_fit: 5,
    car_image:Limo,
    per_km_cost:2.5,
    cname:"car-text"
  },
  {
    car_id: 5,
    car_name: 'Minivan',
    no_of_people_can_fit: 5,
    car_image:Minivan,
    per_km_cost:2.7,
    cname:"car-text"
  },
  {
    car_id: 6,
    car_name: 'Campervan',
    no_of_people_can_fit: 5,
    car_image:Campervan,
    per_km_cost:3,
    cname:"car-text"
  },

  
]