import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <>
      <MapContainer
        center={[14.828201, 120.883354]}
        zoom={14}
        scrollWheelZoom={false}
        style={{
          height: '420px',
          backgroundColor: '#f5f5f5',
          marginTop: '90px',
          zIndex: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[14.828201, 120.883354]}>
          <Popup>Muscle Mansion's Location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
