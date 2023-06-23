import React from 'react';

const InventoryTable = ({ inventoryData }) => {
  const tHead = ['Product Name','Description', 'SKU', 'Price', 'Stock Level'];
  return (
    <table>
      <thead>
        <tr>
          <th>{tHead[0]}</th>
          <th>{tHead[1]}</th>
          <th>{tHead[2]}</th>
          <th>{tHead[3]}</th>
          <th>{tHead[4]}</th>
        </tr>
      </thead>
      <tbody>
        {inventoryData.map((item) => (
          <tr key={item.id}>
            <td>{item.productName}</td>
            <td>{item.Description}</td>
            <td>{item.sku}</td>
            <td>{item.price}</td>
            <td>{item.stockLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
