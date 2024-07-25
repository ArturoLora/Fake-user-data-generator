import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, appendData } from '../redux/dataSlice';
import generateRandomData from '../utils/dataGenerator';

const DataTable = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region);
  const errorCount = useSelector((state) => state.error);
  const seed = useSelector((state) => state.seed);
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const dataRef = useRef(data);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const fetchData = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newData = generateRandomData(region, seed, errorCount, dataRef.current);
      if (newData.length > 0) {
        if (dataRef.current.length > 0) {
          dispatch(appendData(newData));
        } else {
          dispatch(setData(newData));
        }
      }
      console.log('Nuevos datos cargados:', newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [region, seed, errorCount, dispatch]);

  useEffect(() => {
    fetchData();
  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    console.log('Data actualizada:', data);
  }, [data]);

  const handleScroll = useCallback((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 10 && !loading) {
      console.log('Cerca del final, cargando más datos...');
      fetchData();
    }
  }, [loading, fetchData]);

  return (
    <div 
      onScroll={handleScroll} 
      style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc' }}
    >
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={`${record.id}-${index}`}>
              <td>{index + 1}</td>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.address}</td>
              <td>{record.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Cargando más datos...</p>}
    </div>
  );
};

export default DataTable;