import React from 'react';
import { CSVLink } from 'react-csv';
import Category from '../../../../domain/models/category';
import useExportCsv from './state/useExportCsv';

const ExportCsv: React.FC = () => {
  const { catalog } = useExportCsv();
  const csvData = [
    [
      'id',
      'Marca',
      'Modelo',
      'type',
      'Categoría',
      'Descripción de la Categoría',
      'Unidad de medida',
      'estado',
      'Tipo de lugar',
      'createdAt',
      'updatedAt',
    ]
  ];
  catalog.map((item) => {
    const category = item.categoryId as Category;
    csvData.push([
      item.key,
      item.brand,
      item.referenceModel,
      item.type ?? '',
      category.name ?? '',
      category.description ?? '',
      item.unitOfMeasurement ?? '',
      item.state ?? '',
      item.typePlace,
      item.createdAt,
      item.updatedAt,
    ]);
    return item;
  });

  return (
    <>
      <CSVLink filename="Catalogo.csv" data={csvData}>CSV</CSVLink>
    </>
  );
};

export default ExportCsv;
