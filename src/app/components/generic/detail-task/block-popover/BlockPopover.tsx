/* eslint-disable react/no-array-index-key */
import { Popover } from 'antd';
import React, { FunctionComponent } from 'react';
import RenderItem from '../../render-item/RenderItem';

interface Items {
  label: string;
  value: string;
}

interface PropsBlockPopover {
  renderItems: Items[];
  contentPopover: Items[];
}

const BlockPopover: FunctionComponent<{ block: PropsBlockPopover }> = ({ block }) => {
  const renderContentPopover = (
    <div>
      {block.contentPopover.map((item, index) => (
        <RenderItem key={`popover_${index}`} label={item.label} value={item.value} />
      ))}
    </div>
  );

  return (
    <Popover placement="left" content={renderContentPopover} trigger="click" zIndex={1000}>
      <div style={{ margin: '10px 0px' }}>
        {block.renderItems.map((item, index) => (
          <RenderItem key={`render_${index}`} label={item.label} value={item.value} />
        ))}
      </div>
    </Popover>
  );
};

export default BlockPopover;
