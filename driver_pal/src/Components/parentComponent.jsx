// ParentComponent.jsx
import React, { useState } from 'react';
import SearchBox from '../../src/components/SearchBar/SearchBox';

const ParentComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Callback function to handle the selected location and event
  const handleLocationSelection = ({ location, event }) => {
    console.log('Selected Location:', location);
    // You can perform further actions with the selected location
    setSelectedLocation(location);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Selected Location: {selectedLocation && selectedLocation.place_name}</p>
      
      {/* Pass the callback function to SearchBox */}
      <SearchBox callback={handleLocationSelection} />
    </div>
  );
};

export default ParentComponent;
