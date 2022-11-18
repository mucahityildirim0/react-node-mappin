import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 2.3522,
        latitude: 48.8566,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker longitude={2.3522} latitude={48.8566} anchor="center">
        <LocationOnIcon />
      </Marker>
      <Popup longitude={2.3522} latitude={48.8566} anchor="left">
        <div className="card">
          <label>Place</label>
          <h4 className="place"> Eiffel Tower</h4>
          <label>Review</label>
          <p>Beautiful place. I like it.</p>
          <label>Rating</label>
          <div className="start">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <label>INformation</label>
          <span className="username">
            Created by <b>mücahit</b>
          </span>
          <span className="date">1 hour ago</span>
        </div>
      </Popup>
    </Map>
  );
}

export default App;
