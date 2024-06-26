import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Map = () => {
  const coordinates = [14.828201, 120.883354];
  const markerIcon = new Icon({
    iconUrl: '/mm-person.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [1, -52],
  });

  return (
    <>
      <MapContainer
        center={coordinates}
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
        <Marker position={coordinates} icon={markerIcon}>
          <Popup>Muscle Mansion's Location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
