import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useSelector } from 'react-redux';

const loader = new Loader({
  apiKey: 'AIzaSyBrf_iF7zCqL484cqqZprk6wWXg7xoGQUQ',
  version: 'weekly',
  libraries: ['geometry', 'places'],
});

const mapOptions = {
  center: {
    lat: 50.450001,
    lng: 30.523333,
  },
  zoom: 5,
};

const GMap = () => {
  const googleMapRef = useRef(null);
  const [maps, setMaps] = useState(null);

  const { cartItems } = useSelector((state) => state.cart);

  let map;
  const initGoogleMap = (googleMapRef) => {
    map = new window.google.maps.Map(googleMapRef.current, mapOptions);
  };

  const createMarker = (pos, map, name) => {
    const marker = new maps.Marker({
      position: pos,
      icon: 'images/shop-icon.png',
      map: map,
      title: name,
    });

    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(pos);
    bounds.extend(mapOptions.center);
    map.fitBounds(bounds);
  };

  const mapsObjectSetter = async () => {
    const google = await loader.load();
    setMaps(google.maps);
  };

  useEffect(() => {
    mapsObjectSetter();
  }, []);

  useEffect(() => {
    if (!maps) return;
    initGoogleMap(googleMapRef);
  }, [maps]);

  useEffect(() => {
    if (!maps) {
      return;
    }
    if (cartItems.length !== 0) {
      const { lat, lng, name } = cartItems[0].shop;
      createMarker({ lat: +lat, lng: +lng }, map, name);
    }
  }, [maps]);

  //   useEffect(() => {
  //     if (!map) return;

  //     var directionsService = new window.google.maps.DirectionsService();
  //     var directionsRenderer = new window.google.maps.DirectionsRenderer();
  //     var haight = new window.google.maps.LatLng(37.7699298, -122.4469157);
  //     var oceanBeach = new window.google.maps.LatLng(
  //       37.7683909618184,
  //       -122.51089453697205
  //     );
  //     var request = {
  //       origin: haight,
  //       destination: oceanBeach,
  //       travelMode: 'WALKING',
  //     };
  //     directionsService.route(request, function (response, status) {
  //       if (status == 'OK') {
  //         directionsRenderer.setDirections(response);
  //         directionsRenderer.setMap(map);
  //       }
  //     });
  //   }, [map]);

  return (
    <div
      ref={googleMapRef}
      style={{ width: '100%', height: '39%', marginBottom: 10 }}
    />
  );
};

export default GMap;
