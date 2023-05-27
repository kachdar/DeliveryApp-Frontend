import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 50.450001,
      lng: 30.523333,
    },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40%', width: '100%', marginBottom: "10px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBrf_iF7zCqL484cqqZprk6wWXg7xoGQUQ' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
