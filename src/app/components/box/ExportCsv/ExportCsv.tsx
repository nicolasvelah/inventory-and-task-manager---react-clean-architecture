import React from 'react';
import { CSVLink } from 'react-csv';
import { DataCollected } from '../../../../domain/models/boxes';
import useExportCsv from './state/useExportCsv';

const ExportCsv: React.FC = () => {
  const { boxes } = useExportCsv();
  const csvData = [
    [
      'id',
      'Nombre',
      'Marca',
      'Modelo',
      'Unidad',
      'Tipo de lugar',
      'Material sobrante',
      'Total de material',
      'Sitio',
      'Identificadores',
    ]
  ];
  boxes.map((item) => {
    const dataCollected = item.attributes.dataCollected as unknown as DataCollected[];
    let dataCollectedRender = '';
    dataCollected.map((itemRd) => {
      dataCollectedRender += `${itemRd.name}: ${itemRd.value} / `;
      return itemRd;
    });
    csvData.push([
      item.attributes._id,
      item.attributes.device.device,
      item.attributes.device.brand,
      item.attributes.device.referenceModel,
      item.attributes.device.unitOfMeasurement ?? '',
      item.attributes.device.typePlace,
      item.attributes.remainingMaterial.toString(),
      item.attributes.totalMaterial.toString(),
      dataCollectedRender
    ]);
    return item;
  });

  return (
    <>
      <CSVLink filename="Cajas.csv" data={csvData}>CSV</CSVLink>
    </>
  );
};

export default ExportCsv;
