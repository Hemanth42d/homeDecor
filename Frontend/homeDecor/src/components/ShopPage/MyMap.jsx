import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [14.4771, 78.8237];

const MyMap = () => (
  <MapContainer
    center={position}
    zoom={13}
    style={{ height: "500px", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>My Static Location</Popup>
    </Marker>
  </MapContainer>
);

export default MyMap;
