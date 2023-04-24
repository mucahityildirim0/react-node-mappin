import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import "./app.css";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: 2.294694,
          latitude: 48.858093,
          zoom: 4,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >
        <Marker
          scale={10}
          longitude={2.294694}
          latitude={48.858093}
          anchor="bottom"
        >
          <LocationOnIcon />
        </Marker>
        <Popup
          longitude={2.294694}
          latitude={48.858093}
          anchor="left"
          onClose={() => setShowPopup(false)}
        >
          <div className="card">
            <label htmlFor="">Place</label>
            <h4 className="place">Eiffel Tower</h4>
            <label htmlFor="">Review</label>
            <p className="desc">Beautiful place. I like it.</p>
            <label htmlFor="">Rating</label>
            <div className="stars">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
            </div>
            <label htmlFor="">Information</label>
            <span className="username">
              Created by <b>mucahit</b>{" "}
            </span>
            <span className="date">1 hour ago </span>
          </div>
        </Popup>
      </Map>
    </div>
  );
}

export default App;
