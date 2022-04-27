/* global google */
import React from 'react';

const Marker: React.FC<google.maps.MarkerOptions &
// eslint-disable-next-line no-unused-vars
{setGobalPosition: (d:any) => any}> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  const setPosition = () => {
    const position = marker?.getPosition();
    options.setGobalPosition(position);
  };

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.addListener('dragend', setPosition);
    }
  }, [marker, options]);

  return null;
};

export default Marker;
