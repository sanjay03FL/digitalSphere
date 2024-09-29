import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const position = [27.95177, -81.94707];
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={L.divIcon({
          className: "custom-marker",
          html: `<svg xmlns="http://www.w3.org/2000/svg" height="2.25em" viewBox="0 0 384 512" style="fill:${"red"};"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
          iconSize: [30, 30],
        })}
      >
        <Popup>1033 Station Street Lakeland, FL</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
