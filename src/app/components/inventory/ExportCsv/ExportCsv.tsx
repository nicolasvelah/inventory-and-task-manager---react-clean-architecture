import React from 'react';
import { CSVLink } from 'react-csv';
import Catalog from '../../../../domain/models/catalog';
import Place from '../../../../domain/models/place';
import User from '../../../../domain/models/user';
import useExportCsv from './state/useExportCsv';

const ExportCsv: React.FC = () => {
  const { inventory } = useExportCsv();
  const csvData = [
    [
      'id Equipo',
      'Nombre',
      'Marca',
      'Modelo',
      'Categoría',
      'Tipo',
      'Estado',
      'Técnico',
      'Sitio',
      'Identificadores',
      'Id Tarea',
      'Día de instalación'
    ]
  ];
  inventory.forEach((item) => {
    const device = item.device as Catalog;
    const user = item.user as User;
    const place = item.place as Place;

    csvData.push([
      item.key ?? '',
      device.device ?? '',
      device.brand ?? '',
      device.referenceModel ?? '',
      device.categoryId.name ?? '',
      device.type ?? '',
      item.state ?? '',
      user ? `${user.name} ${user.lastName}` : '',
      place ? place.name : '',
      item.installationDate ?? ''
    ]);
  });

  return (
    <>
      <CSVLink filename="Inventory.csv" data={csvData}>
        CSV
      </CSVLink>
    </>
  );
};

export default ExportCsv;
