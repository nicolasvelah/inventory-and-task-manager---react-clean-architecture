import React from 'react';
import { CSVLink } from 'react-csv';
import useExportCsv from './state/useExportCsv';

const ExportCsv: React.FC = () => {
  const { tasks } = useExportCsv();
  const csvData = [
    [
      'id',
      'technical',
      'coordinator',
      'place',
      'scheduledDate',
      'arrivalDate',
      'arrivalLatLong',
      'closedDate',
      'closedLatLong',
      'type',
      'description',
      'catalogToInstall',
    ]
  ];
  tasks.map((item) => {
    csvData.push([
      item.key,
      item.technical,
      item.coordinator,
      item.place,
      item.scheduledDate,
      item.arrivalDate,
      item.arrivalLatLong,
      item.closedDate,
      item.closedLatLong,
      item.type,
      item.description,
      item.catalogToInstall,
    ]);
    return item;
  });

  return (
    <>
      <CSVLink filename="tareas.csv" data={csvData}>CSV</CSVLink>
    </>
  );
};

export default ExportCsv;
