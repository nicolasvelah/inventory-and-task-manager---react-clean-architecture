/* eslint-disable no-unused-vars */
/* global google */
import React, { useEffect, useRef, ReactElement } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import {
  InputNumber, Form, Input
} from 'antd';
import Marker from './Marker';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const FormPlaceMap: React.FC<{setLatParent: (d:any) => any, setLngParent: (d:any) => any}> =
({ setLatParent, setLngParent }) => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(6); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 19.432608,
    lng: -99.133209,
  });
  const [lat, setLat] = React.useState(19.432608);
  const [lng, setLng] = React.useState(-99.133209);

  const setDataFromInput = async (val:number, type: 'lat' | 'lng') => {
    if (type === 'lat') {
      await setLat(val);
      setLatParent(val);
      setCenter({ ...center, lat: val });
    } else {
      await setLng(val);
      setLngParent(val);
      setCenter({ ...center, lng: val });
    }
  };

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
        <Input.Group compact>
          <Form.Item
            name="lat"
            label="Lat"
          >
            <InputNumber
              size="large"
              defaultValue={lat}
              placeholder="Latitud"
              style={{ width: 200 }}
              onChange={(event:number) => setDataFromInput(
                event, 'lat'
              )}
            />
          </Form.Item>
          <Form.Item
            name="lng"
            label="Lng"
          >
            <InputNumber
              size="large"
              defaultValue={lng}
              placeholder="Logitud"
              style={{ width: 200 }}
              onChange={(event:number) => setDataFromInput(
                event, 'lng'
              )}
            />
          </Form.Item>
          <div ref={ref} style={style} />
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { map });
            }
            return null;
          })}
        </Input.Group>
      </>
    );
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const setGobalPosition = async (position:any) => {
    await setCenter(position);
    await setZoom(14);
    setLatParent(position.lat);
    setLat(position.lat);
    setLngParent(position.lat);
    setLng(position.lng);
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
      <Map style={{ width: '100%', height: '300px' }} onClick={onClick} center={center} zoom={zoom}>
        <Marker position={center} draggable setGobalPosition={setGobalPosition} />
      </Map>
    </Wrapper>
  );
};

export default FormPlaceMap;
