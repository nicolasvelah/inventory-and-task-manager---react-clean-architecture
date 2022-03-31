/* eslint-disable no-unused-vars */
/* global google */
import React, { useEffect, useRef, ReactElement } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Marker from './Marker';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const FormPlaceMap: React.FC = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const Map: React.FC<MapProps> = ({
    onClick,
    onIdle,
    children,
    style,
    ...options
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {
          center: { lat: 19.432608, lng: -99.133209 },
          zoom: 6
        }));
      }
    }, [ref, map]);

    useEffect(() => {
      if (map) {
        ['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName));

        if (onClick) {
          map.addListener('click', onClick);
        }

        if (onIdle) {
          map.addListener('idle', () => onIdle(map));
        }
      }
    }, [map, onClick, onIdle]);

    return (
      <>
        <div ref={ref} style={style} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { map });
          }
          return null;
        })}
      </>
    );
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick');
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const render = (status: Status): ReactElement => {
    switch (status) {
      default:
        return <></>;
      case Status.LOADING:
        return <div>Loading</div>;
      case Status.FAILURE:
        return <div>Error</div>;
    }
  };

  return (
    <Wrapper apiKey="AIzaSyCWbi6zMNDNlTuo-2ZE-sVsHVuN_NRa3U0" render={render}>
      <Map style={{ width: '100%', height: '300px' }} onClick={onClick}>
        <Marker position={{ lat: 19.432608, lng: -99.133209 }} />
      </Map>
    </Wrapper>
  );
};

export default FormPlaceMap;
