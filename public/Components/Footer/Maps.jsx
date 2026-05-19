"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import pinIcon from "../../../img/maps/pin.svg";
import styles from "./Maps.module.css";

const pinSrc = typeof pinIcon === "string" ? pinIcon : pinIcon.src;

const markerWithLabel = L.divIcon({
  className: styles.markerIconWrap,
  html: `
    <div class="${styles.markerGroup}">
      <img src="${pinSrc}" width="44" height="44" alt="" class="${styles.markerPin}" />
      <span class="${styles.markerLabel}">Brusok.khm</span>
    </div>
  `,
  iconSize: [200, 44],
  iconAnchor: [22, 44],
});

export function Map() {
  const position = [49.474933, 27.043817];

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        attributionControl={false}
        className={styles.mapContainer}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={position} icon={markerWithLabel} />
      </MapContainer>
    </div>
  );
}
