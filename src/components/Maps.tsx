'use client';
import React, { use, useEffect, useState } from 'react';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import getCampgrounds from '@/libs/getCampgrounds';

const CampgroundsMap = ({ className, onMarkerClick }: { className?: string, onMarkerClick?: (id: string) => void }) => {
  const icon = L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const markerClick = (e: any) => {
    onMarkerClick?.(e.target.getPopup().getContent());
  }

  const [campgrounds, setCampgrounds] = useState<CampgroundJson | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const campgrounds: CampgroundJson = await getCampgrounds();
      setCampgrounds(campgrounds);
    };
    fetch();
  }, []);


  return (
    <MapContainer className={className} center={[15, 0]} zoom={2} scrollWheelZoom={true}>
      <ReactLeafletGoogleLayer />
      {
        campgrounds?.data.map((campgroundItem: CampgroundItem) => (
          campgroundItem.location.coordinates.length === 2 ?
            <Marker eventHandlers={{ click: (e) => { onMarkerClick ? onMarkerClick(campgroundItem.id) : {} } }} icon={icon} position={[campgroundItem.location.coordinates[1], campgroundItem.location.coordinates[0]]}>
              <Popup closeButton>
                {campgroundItem.name}
              </Popup>
            </Marker> : null
        ))
      }
    </MapContainer>
  );

};

export default CampgroundsMap;
