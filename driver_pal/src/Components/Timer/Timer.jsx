import { React , useEffect, useState }from 'react'
import './Timer.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { GrFormNext } from "react-icons/gr";
import { IconContext } from 'react-icons';


import CricketImg from '../../assets/cricket.png';
import FootBallImg from '../../assets/football.png';
export const Timer = ({duration,onTimerClick}) => {


  const [time, setTime] = useState([]);
  const [data, SetData] = useState([]);


  function calcTime(days, hours, minutes, seconds)
  {
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;

    const totalMilliseconds =
        days * hoursPerDay * minutesPerHour * secondsPerMinute * millisecondsPerSecond +
        hours * minutesPerHour * secondsPerMinute * millisecondsPerSecond +
        minutes * secondsPerMinute * millisecondsPerSecond +
        seconds * millisecondsPerSecond;

    return totalMilliseconds;

  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTime = time.map(item => item - 1000);
      setTime(updatedTime);

      if (updatedTime.every(item => item <= 0)) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);

  }, [time]);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/events');
        const jsonData = await response.json();
        SetData(jsonData);

        const newTime = jsonData.map(item => calcTime(item.days, item.hours, item.mints, item.secs));
        setTime(newTime);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    fetchData();
  }, []);

  const handleClick = ({lat,long}) => {
    // Call the callback function with the value you want to pass back
    // onTimerClick(25.046200797272526, 55.21837725347731);
    console.log(lat);
    console.log(long);
    onTimerClick(lat,long);

    
  };

  useEffect(() => {
    // Perform calculations for each value in the 'time' array
    const calculatedValues = time.map(value => {
      const totalSeconds = Math.floor(value / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
  
      return {
        days: Math.floor(totalHours / 24),
        hours: totalHours % 24,
        minutes: totalMinutes % 60,
        seconds: totalSeconds % 60
      };
    });
  
    const daysArray = calculatedValues.map(value => value.days);
    const hoursArray = calculatedValues.map(value => value.hours);
    const minutesArray = calculatedValues.map(value => value.minutes);
    const secondsArray = calculatedValues.map(value => value.seconds);

    for (let i = 0; i < daysArray.length; i++)
    {
      data[i].days = daysArray[i];
      data[i].hours = hoursArray[i];
      data[i].mints = minutesArray[i];
      data[i].secs = secondsArray[i];
    }
  
  }, [time]);

  return (
     
    <div className="event-box">
      <div className="timer-overlay"> 
      
      {data.map(item => (
         <IconContext.Provider value={{ color: '#fff' }}>
         <div className="timer-box">
           <div class='timer-cotent'>
             <div className="timer-content-left">
                 <div className='cont'>
                   <span>{item.days}</span>
                   <span>Days</span>
                 </div>
                 <div className='cont'>
                   <span>{item.hours}</span>
                   <span>Hours</span>
                 </div>
                 <div className='cont'>
                   <span>{item.mints}</span>
                   <span>Minutes</span>
                 </div>
                 <div className='cont'>
                   <span>{item.secs}</span>
                   <span>Seconds</span>
                 </div>
             </div>
             <div className="event-content">
               <div className="event-text">
                 {/* <h3>INDIA VS AUSTRALIA</h3>
                 <h3 className='f400'>DUBAI INTERNAIONAL STADIUM, DUBAI</h3>
                 <h3 className='mar'>United Arab Emirates</h3>
                 <a onClick={handleClick}>Get Direction</a> */}
 
                 <h3>{item.name}</h3>
                 <h3 className='f400'>{item.match_location}</h3>
                 <h3 className='mar'>United Arab Emirates</h3>
                 <a onClick={() => handleClick({ lat: item.event_latitude, long: item.event_longitude })}>Get Direction</a>
               </div>  
               <div className="event-image">
                   {/* <img src={CricketImg} alt="" />   */}
                   <img src={FootBallImg} alt="" />  
 
               </div>   
               <div className="event-next">
               <GrFormNext size={50}/>
               </div>
             </div>
           </div>
         </div>  
         </IconContext.Provider>
        ))}

       
        
       
      </div>
    </div>
    
    

  )
}
