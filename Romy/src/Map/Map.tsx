import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Marqueur Casablanca
const casablancaCoords: [number, number] = [33.5731, -7.5898];

function RecenterMap({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 13);
  }, [coords]);
  return null;
}

const getIPAddress = async (): Promise<string> => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'IP :", error);
    return "IP inconnue";
  }
};


let userid =0 ;

function MapPage() {
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);

  const dowloadcoordonn = async(Coords: [number,number] ) =>{
      console.log("Coordonnées reçues :", Coords);
      try{
          if(userid === 0){
          const ip = await getIPAddress();
          await setDoc(doc(db,"Connexion",new Date().getTime().toString()),{
              latitude: Coords[0],
              longitude: Coords[1],
              Ip: ip,
              createdAt: new Date()

              });

          }

      alert("Bien enregistrer");
      }catch(error){
          alert("problème ");
          console.log("erreur")
          }
      }
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords: [number , number] = [
            position.coords.latitude,
            position.coords.longitude,
            ] ;
        setUserCoords( coords);
        dowloadcoordonn(coords);


      },
      (error) => {
        console.error('Erreur de géolocalisation :', error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        center={casablancaCoords}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        dowloadcoordonn
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marqueur pour Casablanca */}
        <Marker position={casablancaCoords}>
          <Popup>Casablanca</Popup>
        </Marker>

        {/* Marqueur position actuelle */}
        {userCoords && (
          <>
            <Marker position={userCoords}>
              <Popup>Vous êtes ici</Popup>
            </Marker>
            <RecenterMap coords={userCoords} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapPage;
