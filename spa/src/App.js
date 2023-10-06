import React, { useState } from 'react';
import './App.css';

const properties = [
  {
    "id": "852223931024",
    "area": "Westchester County",
    "address": "6 Garth rd, Scarsdale, NY 10583",
    "city": "Scarsdale",
    "image": "1.jpg",
    "type": "Duplex",
    "floorspace": 1264,
    "beds": 3,
    "baths": 1,
    "price": 295000,
    "parking": 2,
    "construction": ["fireplace", "landry"]
  },
  {
    "id": "651263730501",
    "area": "Westchester County",
    "address": "39 Sterling ave, White Plains, NY 10606",
    "city": "White Plains",
    "image": "2.jpg",
    "type": "Condo",
    "floorspace": 768,
    "beds": 2,
    "baths": 2,
    "price": 445000,
    "parking": 1,
    "construction": ["elevator", "garage"]
  },
  {
    "id": "3511539610225",
    "area": "Westchester County",
    "address": "62 Highland St, Eastchester, NY 10608",
    "city": "Eastchester",
    "image": "3.jpg",
    "type": "Single Family",
    "floorspace": 1264,
    "beds": 4,
    "baths": 1,
    "price": 325000,
    "parking": 0,
    "construction": ["basement", "landry"]
  },
  {
    "id": "2511639410001",
    "area": "Westchester County",
    "address": "33 Alden Pl, Bronxville, NY 10708",
    "city": "Bronxville",
    "image": "4.jpg",
    "type": "Townhouse",
    "floorspace": 1074,
    "beds": 3,
    "baths": 1,
    "price": 665000,
    "parking": 0,
    "construction": ["fireplace", "gym"]
  },
  {
    "id": "2411639439991",
    "area": "Westchester County",
    "address": "261 California rd, Mamaroneck, NY 10612",
    "city": "Mamaroneck",
    "image": "5.jpg",
    "type": "Studio",
    "floorspace": 700,
    "beds": 1,
    "baths": 1,
    "price": 265000,
    "parking": 1,
    "construction": ["landry", "gym"]
  },
  {
    "id": "1522639490009",
    "area": "Westchester County",
    "address": "23 Isle Lane, New Rochelle, NY 10538",
    "city": "New Rochelle",
    "image": "6.jpg",
    "type": "Multi Family",
    "floorspace": 1630,
    "beds": 3,
    "baths": 2,
    "price": 765000,
    "parking": 3,
    "construction": ["basement", "fireplace"]
  },
  {
    "id": "19639490088",
    "area": "Westchester County",
    "address": "95 Vernon ave, Scarsdale, NY 10538",
    "city": "Scarsdale",
    "image": "7.jpg",
    "type": "Studio",
    "floorspace": 1200,
    "beds": 1,
    "baths": 1,
    "price": 215000,
    "parking": 3,
    "construction": ["elevator", "garage"]
  },
  {
    "id": "1122459390065",
    "area": "Westchester County",
    "address": "321 Munday Lane, Eastchester, NY 10606",
    "city": "Eastchester",
    "image": "8.jpg",
    "type": "Multi Family",
    "floorspace": 2100,
    "beds": 3,
    "baths": 1,
    "price": 845000,
    "parking": 3,
    "construction": ["basement", "pool"]
  },
  {
    "id": "1722679430009",
    "area": "Westchester County",
    "address": "123 Ducksworth Way, New Rochelle, NY 10535",
    "city": "New Rochelle",
    "image": "9.jpg",
    "type": "Single Family",
    "floorspace": 2300,
    "beds": 2,
    "baths": 1,
    "price": 650000,
    "parking": 3,
    "construction": ["garage", "landry"]
  }
];

function App() {
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('list'); 
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlePropertySelect = (propertyId) => {
    const property = properties.find((p) => p.id === propertyId);
    setSelectedProperty(property);
    setView('details');
  };

  const handleBackToList = () => {
    setSelectedProperty(null);
    setView('list');
  };

  const handleEnquiry = () => {
    setView('enquiry');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = properties.filter((property) =>
      property.city.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Real Estate App</h1>
      <div>
        <input
          type="text"
          placeholder="Search Properties by Area"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {view === 'list' && (
        <>
        <h2>Property List</h2>
          <div className="property-container">
            {filteredProperties.map((property) => (
              <div className="property-card" key={property.id}>
                {/* "type": "Duplex",
                    "floorspace": 1264,
                    "beds": 3,
                    "baths": 1, 
                  */}
                <img src={property.image} alt={property.title} />
                <h3>City : {property.city}</h3>
                <p>Area : {property.area}</p>
                <p>Address : {property.address}</p>
                <p>Type : {property.type}</p>
                <p>Floor Space : {property.floorspace}</p>
                <p>No. of beds : {property.beds}</p>
                <p>No. of baths : {property.baths}</p>
                <button className="item-button" onClick={() => handlePropertySelect(property.id)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'details' && (
        <>
          <h2>Property Details</h2>
          {selectedProperty && (
            <>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
              />
              <h3>{selectedProperty.title}</h3>
              <p>{selectedProperty.description}</p>
              <p>Location: {selectedProperty.location}</p>
              <p>Price: {selectedProperty.price}</p>
              <button onClick={handleBackToList}>Back to List</button>
              <button onClick={handleEnquiry}>Enquire</button>
            </>
          )}
        </>
      )}

      {view === 'enquiry' && (
        <>
          <h2>Enquiry Form</h2>
          {selectedProperty && (
            <div className="form-items">
              <h3>Contact about {selectedProperty.id}</h3>
              <form onSubmit={handleSubmit}>
              <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
                <button onClick={handleBackToList}>Back to List</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
