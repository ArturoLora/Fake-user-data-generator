import React from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';

const ExportCSV = () => {
  const data = useSelector((state) => state.data);

  // Add index to each record
  const dataWithIndex = data.map((item, index) => ({
    index: index + 1,
    id: item.id,
    name: item.name,
    address: item.address,
    phone: item.phone
  }));

  const headers = [
    { label: 'Index', key: 'index' },
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Address', key: 'address' },
    { label: 'Phone', key: 'phone' }
  ];

  return (
    <CSVLink data={dataWithIndex} headers={headers} filename="user_data.csv">
      Export to CSV
    </CSVLink>
  );
};

export default ExportCSV;
