/* eslint-disable no-unused-vars */
/* global google */
import React, { useEffect, useRef, ReactElement } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Marker from './Marker';
import Point from '../../../../../domain/models/point';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const DetailMap: React.FC<{coordinates:Point}> = ({ coordinates }) => {
  const [zoom, setZoom] = React.useState(16); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: coordinates.coordinates[1],
    lng: coordinates.coordinates[0],
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
          center,
          zoom
        }));
      }
    }, [ref, map]);

    useEffect(() => {
      if (map) {
        ['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName));

        if (onClick) {
          map.addListener('click', onClick);
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

  const onClick = (e: google.maps.MapMouseEvent) => {};

  const setGobalPosition = async (position:any) => {
    await setCenter(position);
    await setZoom(14);
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
    <Wrapper apiKey={process.env.REACT_APP_MAPS_KEY ?? ''} render={render}>
      <Map style={{ width: '100%', height: '180px' }} onClick={onClick} center={center} zoom={zoom}>
        <Marker position={center} setGobalPosition={setGobalPosition} />
      </Map>
    </Wrapper>
  );
};

export default DetailMap;
