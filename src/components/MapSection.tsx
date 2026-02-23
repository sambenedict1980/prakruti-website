"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in Next.js / webpack
const feedingIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const plantationIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface MapMarker {
    lat: number;
    lng: number;
    title: string;
    type: "feeding" | "plantation";
}

interface MapSectionProps {
    markers: MapMarker[];
}

export default function MapSection({ markers }: MapSectionProps) {
    return (
        <MapContainer
            center={[10.7628, 78.8156]}
            zoom={16}
            scrollWheelZoom={false}
            className="h-full w-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((m, i) => (
                <Marker
                    key={i}
                    position={[m.lat, m.lng]}
                    icon={m.type === "feeding" ? feedingIcon : plantationIcon}
                >
                    <Popup>
                        <div className="text-sm font-medium">{m.title}</div>
                        <div className="text-xs text-gray-500 capitalize">{m.type} point</div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
