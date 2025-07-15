import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { db } from "../Firebase"; // Ton fichier Firebase.ts
import { doc, setDoc } from "firebase/firestore";

// Icônes Leaflet corrigées
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});


// Coordonnées initiales (Casablanca)
const casablancaCoords: [number, number] = [33.5731, -7.5898];

// Composant pour recentrer la carte
function RecenterMap({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 13);
  }, [coords]);
  return null;
}


const getIp = async() : Promise<string> =>{
  try{
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  }
  catch(error){
    console.log("Erreur lors de la récuération" ,error);
    return "Erreur"; 
  }
}

function MapPage() {
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);
  const [sentOnce, setSentOnce] = useState(false); // Pour éviter les envois multiples

  // Envoie les coordonnées dans Firestore
  const uploadCoordinates = async (coords: [number, number]) => {
    console.log("Coordonnées reçues :", coords);
    try {
      const ip = await getIp();
      if (!sentOnce) {
        await setDoc(doc(db, "Connexion", new Date().getTime().toString()), {
          latitude: coords[0],
          longitude: coords[1],
          IP:ip,
          createdAt: new Date()
        });
        alert("Coordonnées bien enregistrées !");
        setSentOnce(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Problème lors de l'enregistrement.");
    }
  };

  // Géolocalisation
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords: [number, number] = [
          position.coords.latitude,
          position.coords.longitude
        ];
        setUserCoords(coords);
        uploadCoordinates(coords); // Envoi Firestore
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
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marqueur Casablanca */}
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
