import React from 'react';
import { Button, List } from 'antd';
import CardCategoryMaterial from './CardCategoryMaterial/CardCategoryMaterial';
import useAddMaterialState from './state/useAddMaterialState';
import { AddMaterialProps } from './AddMaterial.interfaces';
import './add-material.scss';

const AddMaterial: React.FC<AddMaterialProps> = ({
  categoryMaterials,
  handleLinkedMaterials,
  handleItemClick
}) => {
  const {
    actions: { handleSaveMaterials }
  } = useAddMaterialState({
    categoryMaterials,
    handleLinkedMaterials
  });

  return (
    <div className="add-material">
      <div className="header-add-material">
        <h2>Material de bodega o asignados al técnico</h2>
        <h4>Selecciona el material que vas usar en el sitio</h4>
      </div>
      <div style={{ height: 400, overflowY: 'scroll' }}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 2
          }}
          dataSource={categoryMaterials}
          renderItem={(item) => (
            <List.Item>
              <CardCategoryMaterial
                category={item}
                handleItemClick={handleItemClick}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="footer-add-material">
        <span>
          Al guardar los materiales seleccionados en bodega se asignarán al
          técnico y sitio asignados a la tarea
        </span>
        <Button type="primary" onClick={handleSaveMaterials}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default AddMaterial;
