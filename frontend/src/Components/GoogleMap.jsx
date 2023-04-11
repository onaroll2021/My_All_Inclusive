
import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const mapOptions = {
  center: {
    lat: 49.1787704,
    lng: -123.1282868
  },
  zoom: 12
};

function MyMapComponent({mapOptions}) {
  const ref = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, mapOptions);
    const marker = new window.google.maps.Marker({
      position: mapOptions.center,
      map: map,
      label: {
        text: "All Inclusive!",
        color: "black",
        fontSize: "14px",
        fontWeight: "bold"
      }
    });
    const infoWindow = new window.google.maps.InfoWindow({
      content: `<h2 style="font-weight: bold;">All Inclusive!</h2><p>Address: 8571 Alexandra Rd <br />Richmond, BC V6X 1C3<br />Canada</p><a href='https://www.yelp.ca/biz/chef-pin-richmond' style="color: #663399; text-decoration: underline;">Visit website</a>`,
    });
    
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }, []);

  return <div ref={ref} id="map" className="h-64 w-full"/>;
}

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <p>Loading...</p>;
    case Status.FAILURE:
      return <p>Error</p>;
    case Status.SUCCESS:
      return <MyMapComponent mapOptions={mapOptions}/>;
  }
};

function GoogleMap(){
  return (
    <Wrapper apiKey={"AIzaSyAygu-uuo2PHlO32rxub2x1bSwCU14Kl6w"} render={render} />
  )
}

export default GoogleMap;
