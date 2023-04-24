import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import "./app.css";
import axios from "axios";
import { format } from "timeago.js";

function App() {
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [showPopup, setShowPopup] = useState(null);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

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
        {pins.map((p) => (
          <>
            <Marker
              scale={10}
              longitude={p.long}
              latitude={p.lat}
              anchor="bottom"
              onClick={() => handleMarkerClick(p._id, p.long, p.lat)}
            >
              <LocationOnIcon />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                longitude={p.long}
                latitude={p.lat}
                anchor="left"
                onClose={() => setCurrentPlaceId(null)}
              >
                <div className="card">
                  <label htmlFor="">Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label htmlFor="">Review</label>
                  <p className="desc">{p.desc}</p>
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
                    Created by <b>{p.username}</b>{" "}
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
              </Popup>
            )}
          </>
        ))}
      </Map>
    </div>
  );
}

export default App;
