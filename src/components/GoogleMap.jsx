import React from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function GoogleMap({lat, lng}) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{height: "200px", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBytqwDIRSmwoiMl5SaG-W2vXoO0RtC8yI"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <RoomIcon lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
}
